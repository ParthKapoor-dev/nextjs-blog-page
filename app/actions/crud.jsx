"use server";
// Crud Application Page

import { prisma } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleDeleteData(id, formData) {

  const deletePostComments = await prisma.comment.deleteMany({
    where: {
      postId: id
    }
  })

  const deletePost = await prisma.post.delete({
    where: {
      id
    }
  });


  revalidatePath('/');
  redirect('/')
}

export async function handleFormSubmit(FormState, FormData) {

  console.log(FormState)

  try {
    if (!FormData.get("name") || !FormData.get("email") || !FormData.get("data")) {
      throw Error("All Fields are required")
    }

    const data = {
      name: FormData.get('name'),
      email: FormData.get('email'),
    }
    const postData = await prisma.user.create({
      data
    });

  } catch (error) {
    console.log(error)
    return {
      message: error.message
    }
  }
  redirect('/')

}



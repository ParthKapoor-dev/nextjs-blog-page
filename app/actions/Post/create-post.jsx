"use server";
import { prisma } from "@/prisma/db";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPostAction(formState, formData) {

  const session = await auth();

  const data = {
    title: formData.get('post-title'),
    description: formData.get('post-desc'),
  }

  console.log("Data received in server Action ", data);


  try {

    if (!session?.user?.id)
      throw Error('User is not logged In');

    data.userId = session.user.id

    if (!data.title || !data.description)
      throw Error('All Fields are required');

    console.log('validation of this data is correct');

    const post = await prisma.post.create({
      data
    });

    console.log(post);

  } catch (error) {
    console.log(error);
    return {
      message: error.message
    }
  }

  revalidatePath('/');
  redirect('/')
}
"use server";

import { prisma } from "@/prisma/db";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";


export default async function handleCreateComment(postId, parentId, formState, formData) {

  const session = await auth();
  console.log(formData);
  console.log(postId);
  console.log(formState);

  try {

    if (formData.comment)
      throw Error("Comment Field is Required");

    if (!session?.user?.id)
      throw Error("User is not Logged In");

    const data = {
      comment: formData.get('comment'),
      userId: session.user.id,
      postId
    };

    if (parentId) data.parentId = parentId;

    const comment = await prisma.comment.create({
      data
    });

    console.log(comment);

    if (!comment)
      throw Error("Comment is not created");

    revalidatePath('/post/' + postId);

  } catch (error) {
    console.log(error);
    return {
      message: error.message
    }
  }
}
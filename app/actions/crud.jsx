"use server";
// Crud Application Page

import { prisma } from "@/prisma/db";
import { redirect } from "next/navigation";

export async function handleDeleteData(id, formData) {
  "use server";
  const deleteUserEntry = await prisma.user.delete({
    where: {
      id
    }
  })
  redirect('/')
}

export async function handleFormSubmit(FormState , FormData) {

  console.log(FormState)
  
  try {
    if (!FormData.get("name") || !FormData.get("email") || !FormData.get("data")) {
      throw Error("All Fields are required")
    }

    const data = {
      userName: FormData.get('name'),
      email: FormData.get('email'),
      description: FormData.get('data')
    }
    const postData = await prisma.user.create({
      data
    });
  
  } catch (error) {
    console.log(error)
    return {
      message : error.message
    }
  }
  redirect('/')

}
"use server"
//Server Routes Handling Page

import { redirect } from "next/navigation"

export async function handleExplorePage() {
  console.log('We are going to the explore more page')
  redirect('/explore')
}


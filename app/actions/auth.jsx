"use server"
import { redirect } from "next/navigation";

import { signIn, signOut } from "../auth";

export async function GoogleSignIn() {
  return signIn("google");
}

export async function Logout() {
  return signOut();
}


export async function handleHome() {
  redirect('/')
}

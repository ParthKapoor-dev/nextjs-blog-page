"use server"
import { Button } from "@nextui-org/react";
import { GoogleSignIn, Logout } from "@/app/actions/auth";
import { auth } from "@/app/auth";
import GooglePng from "@/public/images/google-png.webp"
import Image from "next/image";

export default async function LoginPage() {

  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center">

      <p className="text-4xl mb-6">
        Authentication Page
      </p>

      {!session?.user ? (
        <form action={GoogleSignIn}>
          <button type="submit" className="py-2 px-4 border-slate-800 border-2 rounded flex items-center text-lg hover:bg-slate-800 hover:text-white duration-150">
            <Image src={GooglePng} height={28} className="mr-2 " />
            Login with Google
          </button>
        </form>
      ) : (
        <form action={Logout}>
          <Button type="submit">Logout</Button>
        </form>
      )}

    </div>
  )
}
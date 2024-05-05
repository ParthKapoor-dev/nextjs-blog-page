"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
// import { auth } from "../auth";

export default function UserAuthentication() {

  const session = useSession();
  const userSession = session?.data?.user;

  return (
    <>
      {userSession ? (
        <Link href="/auth/login" className="cursor-pointer px-2">
          {userSession.name}
        </Link>
      ) : (
        <div>
          <Link href="/auth/login" className="flex justify-center items-center border-2 border-white rounded px-2 hover:border-bg-slate-900 hover:bg-slate-900 hover:text-white duration-100">
            Login
          </Link>
        </div>
      )}
    </>
  )
}
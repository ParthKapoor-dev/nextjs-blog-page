"use client";

import { handleDeleteData } from "../actions/crud";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Entry({ item }) {

  const DeleteDataAction = handleDeleteData.bind(null, item.id);
  const session = useSession();
  const userSession = session?.data?.user;

  return (
    <form action={DeleteDataAction} className="w-[40vw] max-md:w-[80vw] border-2 border-slate-400 rounded py-2 px-4 flex justify-between mb-2 max-md:mb-4 gap-2">
      <div>

        <div className="flex justify-between">
          <Link href={'/post/' + item.id} className="text-lg font-semibold mb-2">
            {item.title} <br />
            by {item.user.name}
          </Link>
          {
            userSession?.email == item.user.email && (
              <button type="submit" className="delete-btn">
                delete
              </button>
            )
          }
        </div>
        <p>
          {item.description.split('').slice(0, 120)}...
        </p>
      </div>
      

    </form>
  )
}
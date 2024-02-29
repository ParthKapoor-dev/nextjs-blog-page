"use client";

import { useRouter } from "next/navigation";
import { handleDeleteData } from "../actions/crud";
import Link from "next/link";

export default function Entry({ item }) {

  const DeleteDataAction = handleDeleteData.bind(null, item.id);

  // function handlePostPage() {
  //   router.push({
  //     pathname: '/post/' + item.id,
  //     query : { post : item }
  //   })
  // };

  return (
    <form action={DeleteDataAction} className="w-[40vw] border-2 border-slate-400 rounded py-2 px-4 flex justify-between mb-2 gap-2">
      <div>
        {/* <div onClick={handlePostPage} className="text-lg font-semibold mb-2">
          {item.title} - by {item.user.name}
        </div> */}

        <Link href={'/post/' + item.id} className="text-lg font-semibold mb-2">
          {item.title} - by {item.user.name}
        </Link>
        <p>
          {item.description}
        </p>
      </div>
      <button type="submit" className="border-2 border-red-600 text-red-600 flex justify-center items-center h-fit p-2 rounded cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-xl duration-500">
        delete
      </button>

    </form>
  )
}
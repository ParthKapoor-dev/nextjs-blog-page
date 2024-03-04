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
          {item.description.split('').slice(0, 120)}...
        </p>
      </div>
      <button type="submit" className="delete-btn">
        delete
      </button>

    </form>
  )
}
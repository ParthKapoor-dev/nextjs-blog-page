import { prisma } from "@/prisma/db";
import Link from "next/link";

import { handleExplorePage } from "./actions/routes";
import { handleDeleteData } from "./actions/crud";
import { Button } from "@nextui-org/react";


export default async function App() {
  "use server" // server Action in a server component
  const data = await prisma.post.findMany({
    include: {
      user: { select: { name: true, email: true } }
    }
  });
  return (
    <div className="flex flex-col justify-center items-center">

      <p className="text-2xl font-bold ">Welcome to the Home Page</p>

      <form action={handleExplorePage} className="flex flex-col ">

        <Button type="submit" className="p-2 my-4 bg-slate-900 w-fit rounded-md text-white hover:bg-white hover:text-slate-900 cursor-pointer border-[0.5px] border-slate-900 transition ease-out duration-200">
          Explore More
        </Button>

      </form>

      {data.length !== 0 ? (
        data.map(item => (
          <Entry item={item} key={item.id} />
        ))
      ) : (
        <div>
          No Records Found
        </div>
      )}
    </div>
  )
}


function Entry({ item }) {
  "use client";

  const DeleteDataAction = handleDeleteData.bind(null, item.id);

  return (
    <form action={DeleteDataAction} className="w-[40vw] border-2 border-slate-400 rounded py-2 px-4 flex justify-between mb-2 gap-2">
      <div>
        <Link href={"/posts/" + item.id} className="text-lg font-semibold mb-2">
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
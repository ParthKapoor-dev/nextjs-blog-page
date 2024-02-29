import { prisma } from "@/prisma/db";

import { handleExplorePage } from "./actions/routes";
import { handleDeleteData } from "./actions/crud";
import { Button } from "@nextui-org/react";
import HomePagePost from "./components/HomePagePosts";

// Create a comments section for each post
// And Comments can reply to other comments

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
          <HomePagePost item={item} key={item.id} />
        ))
      ) : (
        <div>
          No Records Found
        </div>
      )}
    </div>
  )
}


import { prisma } from "@/prisma/db"
import PostPageError from "./PostPageError";

export default async function Post({ params }) {

  const postId = parseInt(params.slug);

  if (isNaN(postId)) 
  return <PostPageError/>
    
  const post = await prisma.post.findFirst({
    where: {
      id: params.slug
    },
    include: {
      user: {
        select: {
          name: true, 
          email : true
        }
      }
    }
  });

  if (!post) {
  return <PostPageError/> 
  }
  
  return (
    <div className=" flex justify-center items-center flex-col text-lg ">
      <div className="font-semibold">
        {post.title} , Written By : {post.user.name}
      </div>
      <div className="mt-6 mb-6">
        {post.description}
      </div>

      <div>
        <div>
          Comments Section
        </div>
        <div>
          Write Comments
        </div>
      </div>
    </div>
  )
}
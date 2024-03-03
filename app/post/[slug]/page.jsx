import { prisma } from "@/prisma/db"
import PostPageError from "./PostPageError";
import CommentSection from "@/app/components/Comments/Section";

export default async function Post({ params }) {

  const postId = parseInt(params.slug);

  if (isNaN(postId))
    return <PostPageError />

  const post = await prisma.post.findFirst({
    where: {
      id: params.slug
    },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    }
  });

  const comments = await prisma.comment.findMany({
    where: {
      postId: params.slug,
      parentId : '0'
    }
  });

  if (!post || !comments) {
    return <PostPageError />
  }

  return (
    <div className=" flex justify-center items-center flex-col text-lg ">
      <div className="font-semibold">
        {post.title} , Written By : {post.user.name}
      </div>
      <div className="mt-6 mb-6">
        {post.description}
      </div>

      <CommentSection post={post} comments={comments} />
    </div>
  )
}
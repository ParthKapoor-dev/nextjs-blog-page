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
      postId : params.slug
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

  if (!post || !comments) {
    return <PostPageError />
  }

  return (
    <div className="flex items-center flex-col text-lg px-[25vw] max-md:px-[6vw] w-full my-8">
      <div className="font-semibold text-4xl max-md:text-2xl">
        {post.title}
        <div className="mt-4 text-lg max-md:text-base">
          Author : {post.user.name}
        </div>
      </div>
      <div className="mt-6 mb-6 whitespace-pre-wrap">
        {post.description}
      </div>

      <CommentSection post={post} comments={comments} parentId={'0'} />
    </div>
  )
}


export async function generateStaticParams() {
  const postData = await prisma.post.findMany({});

  return postData.map(item => ({ slug : item.postId }))
}
import AddComments from "@/app/components/Comments/AddComment";
import ShowComments from "./ShowComments";

export default function CommentSection({ post, comments }) {

  return (
    <div className="w-full">
      <div className="font-semibold text-2xl">
        Comments Section
      </div>
      <div>
        <AddComments post={post} parentId={'0'} />
      </div>
      <div>
        <p className="text-xl font-semibold mb-4">
          Comments
        </p>
        <ShowComments comments={comments} post={post} />
      </div>
    </div>
  )
}
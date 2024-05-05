import AddComments from "@/app/components/Comments/AddComment";
import ShowComments from "./ShowComments";

export default function CommentSection({ post, comments }) {

  return (
    <div className="w-full">
      <div className="font-semibold text-2xl max-md:text-lg">
        Comments Section
      </div>
      <div>
        <AddComments post={post}  />
      </div>
      <div>
        <p className="text-xl max-md:text-lg font-semibold mb-4">
          Comments
        </p>
        <ShowComments comments={comments} post={post} parentId={'0'} />
      </div>
    </div>
  )
}
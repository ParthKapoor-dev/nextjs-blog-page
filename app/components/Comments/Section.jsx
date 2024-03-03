import AddComments from "@/app/components/Comments/AddComment";
import ShowComments from "./ShowComments";

export default function CommentSection({ post, comments }) {

  return (
    <div>
      <div>
        Comments Section
      </div>
      <div>
        Write Comments
        <AddComments post={post} parentId={'0'} />
      </div>
      <div>
        Comments
        <ShowComments comments={comments} post={post} />
      </div>
    </div>
  )
}
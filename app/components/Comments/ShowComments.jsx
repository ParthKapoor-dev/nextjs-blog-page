import Comment from "./Comment"

export default function ShowComments({ comments, post }) {

  return (

    <div className="flex flex-col gap-4 ">

      {comments.map(item => (
        <Comment key={item.id} item={item} post={post} />
      ))}
    </div>
  )
}

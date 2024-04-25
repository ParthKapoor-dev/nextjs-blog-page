import Comment from "./Comment"

export default function ShowComments({ comments, post, parentId }) {

  const showComments = comments.filter(item => {
    console.log(item.parentId);
    return item.parentId == parentId
  });

  return (

    <div className="flex flex-col gap-4 ">

      {showComments.map(item => (
        <Comment key={item.id} item={item} post={post} comments={comments} />
      ))}
    </div>
  )
}

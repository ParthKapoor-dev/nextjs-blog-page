"use client";

import { useEffect, useRef, useState } from "react";
import AddComments from "./AddComment";
import getChildComments from "@/app/actions/Comment/get-child-comments";
import ShowComments from "./ShowComments";

export default function Comment({ item, post }) {

  useEffect(() => {

    async function serverAction() {
      const data = await getChildComments(item.id);
      setcomments(data);
      console.log('server action for child comments');
      console.log(data);
    }
    serverAction();
  }, [])

  const [show, setShow] = useState(false);
  const [childComments, setcomments] = useState([])
  function handleReplyChange() {
    setShow(prev => !prev);
  }


  return (
    <div>
      {item.comment}
      <div >
        <input type="checkbox" id={item.id} onChange={handleReplyChange} />
        <label htmlFor={item.id}>Reply</label>

        {show && (
          <AddComments parentId={item.id} post={post} />
        )}
      </div>

      {(childComments?.length !== 0) &&
        (
          <div>
            Prev Comments
            <ShowComments comments={childComments} post={post} />
          </div>
        )}
    </div>
  )
}
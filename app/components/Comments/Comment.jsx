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
    <div className="w-full border-2 border-slate-500 rounded px-6 py-4">
      <p className="text-xl ">
        {item.comment}
      </p>
      <div >
        <input type="checkbox" id={item.id} onChange={handleReplyChange} className="hidden" />
        <label htmlFor={item.id}>Reply</label>

        {show && (
          <AddComments parentId={item.id} post={post} />
        )}
      </div>

      {(childComments?.length !== 0) &&
        (
          <div>
            <p className="text-base text-slate-600">
              Replied Comments :
            </p>
            <ShowComments comments={childComments} post={post} />
          </div>
        )}
    </div>
  )
}
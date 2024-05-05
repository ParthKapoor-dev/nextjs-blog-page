"use client";

import { useEffect, useRef, useState } from "react";
import AddComments from "./AddComment";
import getChildComments from "@/app/actions/Comment/get-child-comments";
import ShowComments from "./ShowComments";

export default function Comment({ item, post, comments }) {

  const [show, setShow] = useState(false);

  function handleReplyChange() {
    setShow(prev => !prev);
  }

  return (
    <div className="w-full border-2 border-slate-500 rounded px-6 py-4">
      <p className="text-xl ">
        {item.comment}
      </p>
      <p className="font-semibold">
        {item.user.name.split(' ')[0]}
      </p>
      <div >
        <input type="checkbox" id={item.id} onChange={handleReplyChange} className="hidden" />
        <label htmlFor={item.id}>Reply</label>

        {show && (
          <AddComments parentId={item.id} post={post} />
        )}
      </div>

      {(comments?.some((comment) => comment.parentId == item.id)) &&
        (
          <div>
            <p className="text-base text-slate-600">
              Replied Comments :
            </p>
            <ShowComments comments={comments} parentId={item.id} post={post} />
          </div>
        )}
    </div>
  )
}
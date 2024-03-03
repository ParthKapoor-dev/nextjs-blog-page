"use client";

import handleCreateComment from "@/app/actions/Comment/create-comment"
import { useFormState, useFormStatus } from "react-dom"
import FormButton from "../Buttons/FormButtons";

export default function AddComments({ parentId, post }) {

  if (parentId == undefined) parentId = null;

  const [formState, createCommentAction] = useFormState(handleCreateComment.bind(null, post.id, parentId), {
    message: ""
  });

  console.log(formState);

  return (
    <form className="flex flex-col" action={createCommentAction} >
      <p>
        reply
      </p>
      <input type="text" name="comment" required="true" />
      <FormButton name="Add Comment" />
      {(formState && formState?.message !== "") && (
        <>
          The Message is {formState.message}
        </>
      )}

    </form>

  )

}
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
    <form className="flex flex-col my-6 py-2 px-4 border-2 text-lg" action={createCommentAction} >
      <p className="text-xl ">
        Reply 
      </p>
      <input type="text" name="comment" required="true" className="w-full mt-2" />
      <FormButton name="Add Comment" />
      {(formState && formState?.message !== "") && (
        <>
          The Message is {formState.message}
        </>
      )}

    </form>

  )

}
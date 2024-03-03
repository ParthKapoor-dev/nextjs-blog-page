'use client';

import { useFormState } from "react-dom";
import createPostAction from "@/app/actions/Post/create-post";

export default function NewPost() {

  const [formstate, formAction] = useFormState(createPostAction, {
    message: ""
  })

  return (
    <form className="flex flex-col gap-[2px] justify-items-center items-center" action={formAction}>

      <p className="text-2xl mb-8">
        Publish a new Post here
      </p>


      <label htmlFor="post-title">Title for your Post</label>
      <input className="bg-white " name="post-title" id="post-title" />

      <label htmlFor="post-description">Express your feeling here</label>
      <textarea type="text" name='post-desc' id="post-description" className="h-60" />

      <button type="submit" className="border-2 border-slate-400 mt-4 w-[30vw] py-2 rounded hover:bg-slate-400 duration-100">
        Publish
      </button>

      {
        formstate.message !== "" && (
          <div className="border-2 border-red-600 text-red-600 w-[30vw] flex justify-center items-center py-2 mt-2 rounded ">
            {formstate.message}
          </div>
        )
      }
    </form>
  )
}
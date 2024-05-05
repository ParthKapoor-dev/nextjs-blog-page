'use client';

import { useFormState } from "react-dom";
import createPostAction from "@/app/actions/Post/create-post";
import PublishButton from "./publishButton";

export default function NewPost() {

  const [formstate, formAction] = useFormState(createPostAction, {
    message: ""
  });

  // const [ disabled , setDisabled ] = useState(false)

  return (
    <form className="flex flex-col gap-[2px] justify-items-center items-center" action={formAction}>

      <p className="text-2xl mb-8 max-md:text-lg max-md:mb-6">
        Publish a new Post here
      </p>


      <label htmlFor="post-title">Title for your Post</label>
      <input className="bg-white " name="post-title" id="post-title" />

      <label htmlFor="post-description">Express your feeling here</label>
      <textarea type="text" name='post-desc' id="post-description" className="h-60" />

      <PublishButton />

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
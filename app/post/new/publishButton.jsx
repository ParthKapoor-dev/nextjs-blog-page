import { useFormStatus } from 'react-dom'

export default function PublishButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="border-2 border-slate-400 mt-4 w-[60vw] max-md:w-[80vw] py-2 rounded disabled:bg-slate-400 duration-100 hover:bg-slate-700 hover:text-white ">
      {pending ? (
      "Loading..."
      ): (
        "Publish"
      )}
    </button>
  )
}
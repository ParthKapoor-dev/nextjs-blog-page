"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({ name }) {

  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending} className="border-black btn ">
      {pending ? (
        "Loading..."
      ):(
       name
      )}
    </button>
    
  )
}
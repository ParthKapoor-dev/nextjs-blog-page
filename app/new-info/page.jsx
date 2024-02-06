"use client"
import { handleFormSubmit } from "../actions/crud"
import { useFormState } from "react-dom"

export default function NewApp() {
  const [formState, AddDataAction] = useFormState(handleFormSubmit, { message: "" });
  

  return (
    <div className="flex flex-col items-center">

      <p className="text-2xl font-bold">Add New  Data</p>
      
      <form className="text-lg flex flex-col mt-4" action={AddDataAction}>
        <label htmlFor="Name">Full Name</label>
        <input name="name" id="Name" type="text" className="" required="true" />

        <label htmlFor="Email">Current Email</label>
        <input name="email" id="email" type="email" required="true"/>
        
        <label htmlFor="data">Data</label>
        <textarea name="data" id="data" className="h-40" type="text" required="true" />
        
        <button type="submit" className="border-[0.5px] border-slate-900 rounded hover:text-white  hover:bg-slate-900 transition duration-400 mb-4">
          Save New Data
        </button>
        {(formState?.message && formState.message !== "") && (
          <div className="border-2 border-red-600 text-red-600 px-4 py-2 rounded flex justify-center items-center">
            {formState.message}
          </div>
        )}
      </form>
    </div>
  )
}
"use client";

import { useRouter } from "next/navigation";
import { useRef , useEffect, useState } from "react";

export default function ExploreMore() {

  const router = useRouter();
  const divRef = useRef();
  const [ctrlPressed , setCtrl ] = useState(false)

  // Focus on the div at Initial mounting in the page
  useEffect(() => {
    divRef.current.focus();
  }, [])
  
  function handleKeyDown(event) {
    console.log(event.key)
    if (event.key == 'Control') {
      setCtrl(true);
      return;
    }
    if (event.key == 'Enter' && ctrlPressed ) {
      router.push('/');
    }
  }
  return (
    <div className="text-2xl font-bold flex flex-col py-4 items-center focus:outline-none h-[100vh]" ref={divRef} onKeyDown={handleKeyDown} tabIndex={0}>
      Welcome to the Explore more Page

      <div className="text-base font-normal p-2 w-[30vw] border-2 rounded flex justify-center mt-4 cursor-pointer" onClick={()=>router.push('/')}>
        Press Ctrl + Enter will return to the Home Page
      </div>
   </div>
  )
}
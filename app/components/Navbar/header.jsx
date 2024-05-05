"use client";

import Link from "next/link";
import UserAuthentication from "../UserAuthentication";
import { useRef } from "react";
import MenuPng from "@/public/images/menu.png"
import Image from "next/image";

export default function Header() {

  const navRef = useRef();
  function handleOpen() {
    console.log(navRef.current.style.display)
    if (navRef.current.style.display == 'none')
      navRef.current.style.display = 'flex'
    else 
      navRef.current.style.display = 'none'
  }
  return (
    <>
      <div className="flex justify-between px-4 py-2 text-lg max-md:responsive-navbar max-md:hidden" ref={navRef}>

        <div onClick={handleOpen} className="hidden max-md:flex px-2">
          Close
        </div>

        <div className="flex gap-20 max-md:flex-col max-md:gap-4 ">
          <Link href="/" className="btn">
            Explore
          </Link>
          <Link href='/post/new' className="btn">
            Create New Post
          </Link>
          <Link href={'/home'} className="btn">
            Home
          </Link>
        </div>

        <UserAuthentication />

      </div>
      
      <div className="hidden max-md:flex justify-center items-center py-2 gap-10">
        <p className="text-2xl font-bold">
          NEXT GEN BLOG SITE
        </p>
        <Image src={MenuPng} height={25} onClick={handleOpen}/>
      </div>
    </>
  )
}
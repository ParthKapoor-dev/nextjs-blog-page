import Link from "next/link";
import UserAuthentication from "./UserAuthentication";

export default function Header() {
  // we used a different component for UserAuthentication , so that the entire header component doesn't becomes a client component.

  return (
    <div className="flex justify-between px-4 py-2 text-lg">

      <div className="flex gap-20 ">
        <Link href="/" className="border-2 border-white px-2 rounded hover:border-black hover:bg-black hover:text-white duration-200">
          Home
        </Link>
        <Link href='/post/new' className="border-2 border-white px-2 rounded hover:border-black hover:bg-black hover:text-white duration-200">
          Create New Post
        </Link>
      </div>

      <UserAuthentication />

    </div>
  )
}
import WrongPostId from "@/public/images/WrongPostId.jpg"
import Image from "next/image";
import Link from "next/link";

export default function PostPageError() {
  
  return (
      <div className="flex justify-center items-center flex-col text-2xl gap-6 mt-10">
        <Image src={WrongPostId} height={300} />
        <p>
          Invalid Post Id , <Link href="/" className="text-yellow-600">Go back to Home</Link>
        </p>
      </div>
  )
}
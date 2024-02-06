import { prisma } from "@/prisma/db";

export default async function App({params}) {

  const data = await prisma.user.findFirst({
    where: {
      userName : params.id
    }
  })

  if (!data) return (
    <div>
      This title name does not exists
    </div>
  )

  return (
    <div>
      <p>{data.userName}</p>
      <p>{data.email}</p>
      <p>{data.description}</p>

    </div>
  )
}

// Caching Dynamic Page
export async function generateStaticParams() {
  const userData = await prisma.user.findMany({});

  return userData.map(item=>({ id : item.userName}))
}
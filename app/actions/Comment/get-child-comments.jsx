"use server";

import { prisma } from "@/prisma/db";

export default async function getChildComments(parentId) {

  const ChildComments = await prisma.comment.findMany({
    where: {
      parentId
    }
  });

  return ChildComments;
}
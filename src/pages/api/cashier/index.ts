import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.cashier.findMany({
    orderBy: {
      id: 'asc'
    },
    take: 1
  })

  res.status(200).json(result)
}
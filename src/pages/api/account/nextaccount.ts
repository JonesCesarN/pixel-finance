import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.account.findMany({
    orderBy: {
      dueDate: 'asc'
    },
    where: {
      status: 'OPEN'
    },
    take: 2,
    include: { installment: true }
  })

  if (result.length < 1) {
    res.status(200).json({ ok: false, message: "Nenhuma conta encontrada!" });
  } else {
    res.status(200).json(result);
  }
}
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTeamsHandler = async ({ params }) => {
  return await prisma.team.findMany({
    where: {
      quiz_id: Number(params.quizId),
    },
  })
}

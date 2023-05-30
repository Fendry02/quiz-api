import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCategoriesHandler = async ({ params }) => {
  return await prisma.question.findMany({
    where: {
      id: Number(params.quizId),
    },
  })
}

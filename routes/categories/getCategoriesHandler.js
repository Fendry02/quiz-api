import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCategoriesHandler = async ({ params }) => {
  return await prisma.category.findMany({
    where: {
      quiz_id: Number(params.quizId),
    },
  })
}

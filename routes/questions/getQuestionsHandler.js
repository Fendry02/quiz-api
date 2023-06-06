import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getQuestionsHandler = async ({ params }) => {
  return await prisma.question.findMany({
    where: {
      category_id: Number(params.categoryId),
    },
  })
}

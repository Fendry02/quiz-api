import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createCategoryHandler = async ({ body }) => {
  const quizId = Number(body.quiz_id)

  return await prisma.category.create({
    data: {
      name: body.name,
      quiz_id: quizId,
    },
  })
}

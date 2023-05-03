import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getQuestionHandler = async ({ params, ...rest }) => {
  console.log(params)
  return await prisma.question.findUnique({
    where: {
      id: Number(params.questionId),
    },
  })
}

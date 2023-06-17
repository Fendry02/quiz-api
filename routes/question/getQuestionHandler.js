import { prisma } from '../../_base.js'

export const getQuestionHandler = async ({ params }) => {
  return await prisma.question.findUnique({
    where: {
      id: Number(params.questionId),
    },
  })
}

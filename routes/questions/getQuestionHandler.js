import { prisma } from '../../_base.js'

export const getQuestionHandler = async ({ params }) => {
  const questionId = Number(params.questionId)

  return await prisma.question.findUnique({
    where: { id: questionId },
  })
}

import { prisma } from '../../_base.js'

export const updateQuestionHandler = async ({ body, params }) => {
  return await prisma.question.update({
    data: {
      label: body.label,
      answer: body.answer,
      information: body.information,
    },
    where: {
      id: Number(params.questionId),
    },
  })
}

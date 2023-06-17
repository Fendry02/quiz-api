import { prisma } from '../../_base.js'

export const createQuestionHandler = async ({ body }) => {
  return await prisma.question.create({
    data: {
      label: body.label,
      answer: body.answer,
      information: body.information,
      category_id: Number(body.category_id),
    },
  })
}

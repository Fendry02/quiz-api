import { prisma } from '../../_base.js'

export const getQuestionsHandler = async ({ params }) => {
  const categoryId = Number(params.categoryId)

  const questions = await prisma.question.findMany({
    where: { category_id: categoryId },
    include: { category: { include: { quiz: { include: { teams: true } } } } },
  })

  return questions
}

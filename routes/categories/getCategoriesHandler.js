import { prisma } from '../../_base.js'

export const getCategoriesHandler = async ({ params }) => {
  return await prisma.category.findMany({
    where: {
      quiz_id: Number(params.quizId),
    },
  })
}

import { prisma } from '../../_base.js'

export const getQuestionsHandler = async ({ params }) => {
  return await prisma.question.findMany({
    where: {
      category_id: Number(params.categoryId),
    },
    include: {
      category: {
        include: {
          quiz: {
            include: {
              teams: true,
            },
          },
        },
      },
    },
  })
}

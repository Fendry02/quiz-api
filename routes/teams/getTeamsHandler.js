import { prisma } from '../../_base.js'

export const getTeamsHandler = async ({ params }) => {
  return await prisma.team.findMany({
    where: {
      quiz_id: Number(params.quizId),
    },
  })
}

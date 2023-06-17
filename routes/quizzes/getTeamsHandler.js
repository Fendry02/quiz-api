import { prisma } from '../../_base.js'

export const getTeamsHandler = async ({ params }) => {
  const quizId = Number(params.quizId)

  const teams = await prisma.team.findMany({
    where: { quiz_id: quizId },
  })

  return teams
}

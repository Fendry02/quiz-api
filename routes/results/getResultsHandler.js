import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getResultsHandler = async ({ body }) => {
  const results = await prisma.result.groupBy({
    by: ['team_id'],
    where: {
      team_id: {
        in: body.teamIds,
      },
    },
    _sum: {
      point: true,
    },
  })

  const response = results.map((result) => {
    return {
      points: result._sum.point,
      team_id: result.team_id,
    }
  })

  return response
}

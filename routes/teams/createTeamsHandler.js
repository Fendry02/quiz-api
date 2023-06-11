import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createTeamsHandler = async ({ body }) => {
  const promises = body.teams.map(async (team) => {
    return await prisma.team.create({ data: team })
  })
  const teams = await Promise.all(promises)

  return teams
}

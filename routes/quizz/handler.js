import { PrismaClient } from '@prisma/client'

import { pipe } from '../../utils/pipe.js'

const prisma = new PrismaClient()

const checkTeams = ({ body }) => {
  if (body.teamCount !== body.teams.length) {
    throw new Error('Invalid team count')
  }

  return { body }
}

const createQuizz = async ({ body }) => {
  const result = await prisma.quizz.create({
    data: {
      team_count: body.teamCount,
      name: body.name,
      teams: { create: body.teams },
      user_id: 1,
      categories: { create: [] },
    },
    include: {
      teams: true,
      categories: true,
    },
  })

  return { result }
}

const toOutput = ({ result }) => {
  return result
}

export const handler = pipe(checkTeams, createQuizz, toOutput)

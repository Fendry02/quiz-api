import { PrismaClient } from '@prisma/client'

import { pipe } from '../../utils/pipe.js'

const prisma = new PrismaClient()

const updateQuiz = async ({ body }) => {
  const result = await prisma.quiz.update({
    data: {
      team_count: body.teamCount,
      teams: { create: body.teams },
    },
    include: {
      teams: true,
    },
    where: {
      id: Number(body.quizId),
    },
  })

  return { result }
}

const toOutput = ({ result }) => result

export const updateQuizHandler = pipe(updateQuiz, toOutput)

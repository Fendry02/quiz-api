import { PrismaClient } from '@prisma/client'

import { pipe } from '../../utils/pipe.js'

const prisma = new PrismaClient()

const createQuiz = async ({ body }) => {
  const result = await prisma.quiz.create({
    data: {
      name: body.name,
      user_id: 1,
    },
  })

  return { result }
}

const toOutput = ({ result }) => result

export const createQuizHandler = pipe(createQuiz, toOutput)

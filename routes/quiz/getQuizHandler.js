import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getQuizHandler = async () => {
  const result = await prisma.quiz.findMany()

  return result
}

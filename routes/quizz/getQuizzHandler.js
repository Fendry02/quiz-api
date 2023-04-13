import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getQuizzHandler = async () => {
  const result = await prisma.quizz.findMany()

  return result
}

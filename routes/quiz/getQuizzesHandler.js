import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getQuizzesHandler = async () => {
  return await prisma.quiz.findMany()
}

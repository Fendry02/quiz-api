import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getQuestionsHandler = async () => {
  return await prisma.question.findMany()
}

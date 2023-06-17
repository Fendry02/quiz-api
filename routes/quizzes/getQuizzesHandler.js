import { prisma } from '../../_base.js'

export const getQuizzesHandler = async () => {
  return await prisma.quiz.findMany()
}

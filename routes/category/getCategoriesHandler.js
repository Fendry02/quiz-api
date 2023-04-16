import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCategoriesHandler = async () => {
  return await prisma.category.findMany()
}

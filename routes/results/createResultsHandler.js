import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createResultsHandler = async ({ body }) => {
  return await prisma.result.createMany({
    data: body.results,
  })
}

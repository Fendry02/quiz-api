import { prisma } from '../../_base.js'

export const createResultsHandler = async ({ body }) => {
  return await prisma.result.createMany({
    data: body.results,
  })
}

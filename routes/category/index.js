import { createCategoryHandler } from './createCategoryHandler.js'

export default async function (fastify) {
  fastify.post('/', createCategoryHandler)
}

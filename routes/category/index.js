import { getCategoriesHandler } from './getCategoriesHandler.js'
import { createCategoryHandler } from './createCategoryHandler.js'

export default async function (fastify) {
  fastify.get('/', getCategoriesHandler)
  fastify.post('/', createCategoryHandler)
}

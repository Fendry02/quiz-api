import { getCategoriesHandler } from './getCategoriesHandler.js'

export default async function (fastify) {
  fastify.get('/:quizId', getCategoriesHandler)
}

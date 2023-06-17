import { getCategoriesHandler } from './getCategoriesHandler.js'
import { createCategoryHandler } from './createCategoryHandler.js'
import { getQuestionsHandler } from './getQuestionsHandler.js'

export default async function (fastify) {
  fastify.get('/:categoryId/questions', getQuestionsHandler)
  fastify.get('/:quizId', getCategoriesHandler)
  fastify.post('/', createCategoryHandler)
}

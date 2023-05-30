import { getQuestionsHandler } from './getQuestionsHandler.js'

export default async function (fastify) {
  fastify.get('/:categoryId', getQuestionsHandler)
}

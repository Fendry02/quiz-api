import { getQuestionsHandler } from './getQuestionsHandler.js'
import { createQuestionHandler } from './createQuestionHandler.js'
import { getQuestionHandler } from './getQuestionHandler.js'
import { updateQuestionHandler } from './updateQuestionHandler.js'

export default async function (fastify) {
  fastify.get('/', getQuestionsHandler)
  fastify.post('/', createQuestionHandler)
  fastify.get('/:questionId', getQuestionHandler)
  fastify.patch('/:questionId', updateQuestionHandler)
}

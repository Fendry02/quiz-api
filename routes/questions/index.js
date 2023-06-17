import { getQuestionHandler } from './getQuestionHandler.js'
import { createQuestionHandler } from './createQuestionHandler.js'
import { updateQuestionHandler } from './updateQuestionHandler.js'

export default async function (fastify) {
  fastify.get('/:questionId', getQuestionHandler)
  fastify.post('/', createQuestionHandler)
  fastify.patch('/:questionId', updateQuestionHandler)
}

import { createResultsHandler } from './createResultsHandler.js'
import { getResultsHandler } from './getResultsHandler.js'

export default async function (fastify) {
  fastify.post('/', createResultsHandler)
  fastify.post('/:quizId', getResultsHandler)
}

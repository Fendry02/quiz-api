import { createResultsHandler } from './createResultsHandler.js'

export default async function (fastify) {
  fastify.post('/', createResultsHandler)
}

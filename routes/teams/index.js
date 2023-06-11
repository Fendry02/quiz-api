import { getTeamsHandler } from './getTeamsHandler.js'
import { createTeamsHandler } from './createTeamsHandler.js'
import { createTeamsSchema } from './schemas.js'

export default async function (fastify) {
  fastify.get('/:quizId', getTeamsHandler)
  fastify.post('/', { schema: createTeamsSchema }, createTeamsHandler)
}

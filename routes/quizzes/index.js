import { getQuizzesHandler } from './getQuizzesHandler.js'
import { createQuizSchema } from './schemas.js'
import { createQuizHandler } from './createQuizHandler.js'
import { getTeamsHandler } from './getTeamsHandler.js'

export default async function (fastify) {
  fastify.get('/', getQuizzesHandler)
  fastify.post('/', { schema: createQuizSchema }, createQuizHandler)
  fastify.get('/:quizId/teams', getTeamsHandler)
}

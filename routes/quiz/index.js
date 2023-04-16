import { createQuizSchema } from './schemas.js'
import { createQuizHandler } from './createQuizHandler.js'
import { getQuizzesHandler } from './getQuizzesHandler.js'

export default async function (fastify) {
  fastify.post('/', { schema: createQuizSchema }, createQuizHandler)
  fastify.get('/', getQuizzesHandler)
}

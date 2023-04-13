import { createQuizSchema } from './schemas.js'
import { createQuizHandler } from './createQuizHandler.js'
import { getQuizHandler } from './getQuizHandler.js'

export default async function (fastify) {
  fastify.post('/', { schema: createQuizSchema }, createQuizHandler)
  fastify.get('/', getQuizHandler)
}

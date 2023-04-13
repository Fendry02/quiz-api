import { createQuizzSchema } from './schemas.js'
import { createQuizzHandler } from './createQuizzHandler.js'
import { getQuizzHandler } from './getQuizzHandler.js'

export default async function (fastify) {
  fastify.post('/', { schema: createQuizzSchema }, createQuizzHandler)
  fastify.get('/', getQuizzHandler)
}

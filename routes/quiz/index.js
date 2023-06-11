import { createQuizSchema } from './schemas.js'
import { createQuizHandler } from './createQuizHandler.js'

export default async function (fastify) {
  fastify.post('/', { schema: createQuizSchema }, createQuizHandler)
}

import { getQuizzesHandler } from './getQuizzesHandler.js'

export default async function (fastify) {
  fastify.get('/', getQuizzesHandler)
}

import { schema } from './schemas.js'
import { handler } from './handler.js'

export default async function (fastify) {
	fastify.post('/', { schema }, handler)
}

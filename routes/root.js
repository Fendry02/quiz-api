export default async function (fastify) {
	fastify.get('/', async function (request, reply) {
		return { root: true }
	})
}

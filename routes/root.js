export default async function (fastify) {
  fastify.get('/', async function () {
    return { pong: true }
  })
}

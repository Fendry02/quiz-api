const fastify = require('fastify')()

fastify.get('/', async function () {
  return { pong: true }
})

module.exports = async (req, res) => {
  await fastify.ready()
  fastify.server.emit('request', req, res)
}

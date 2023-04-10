/* eslint-disable no-undef */
import fp from 'fastify-plugin'
import dbConnector from '@fastify/postgres'

export default fp(async function (fastify) {
	fastify.register(dbConnector, {
		connectionString: process.env.DATABASE_URL
	})
})

/// <reference types="@platformatic/service" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.decorate('example', 'foobar')
  fastify.get('/app1', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            app: { type: 'string' },
            test: { type: 'string' }
          }
        }
      }
    }
  }, 
  async (req, res) => {
    return { app: '1', test: 'this is a test' }
  })
}

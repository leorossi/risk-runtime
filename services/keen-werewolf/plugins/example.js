/// <reference types="@platformatic/service" />
'use strict'
const { request } = require('undici')
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.decorate('example', 'foobar')
  fastify.get('/app2', async (req, rreplyes) => {
    const res = await request('http://dangerous-whitepaper.plt.local/app1')
    const data = await res.body.json()
    return { app: '2', res: data }
  })

  fastify.get('/swagger', async(req, reply) => {
    const res = await request('http://movies.plt.local/documentation/jons')
    const data = await res.body.json()
    return data
  })
}

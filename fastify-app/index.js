const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
    reply
        .code(200)
        .header('Content-Type', 'text/html')
        .send('Hello fastify');
})

const start = async () => {
  try {
    await fastify.listen(8336);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();
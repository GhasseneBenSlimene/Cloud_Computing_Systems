import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify();

  fastify.get("/feature/:code", async function handler(request, reply) {
    const code = request.params.code
    reply.send({'code':code, 'enabled':true})
  });

  fastify.get("/", async function handler(request, reply) {
    const code = request.params.code
    reply.send({'enabled':true})
  });

  return fastify;
}
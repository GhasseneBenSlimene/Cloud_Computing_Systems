// redisClient.mjs
import { createClient } from "redis";

async function createRedisClient() {
  const client = createClient({ url: process.env.REDIS_URL });
  
  client.on("error", (error) => console.log(error));

  await client.connect();
  return client;
}

const client = await createRedisClient();

export async function getKey(key) {
  return await client.get(key);
}
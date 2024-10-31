// src/queue.ts
import { Queue } from "bullmq";
import { RedisOptions } from "ioredis";

// Configurações do Redis (ajuste conforme necessário)
const redisOptions: RedisOptions = {
  host: "localhost",
  port: 6379,
};

// Criação da fila
export const taskQueue = new Queue("taskQueue", {
  connection: redisOptions,
});

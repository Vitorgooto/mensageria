// src/consumer.ts
import { Worker } from "bullmq";
import { RedisOptions } from "ioredis";

// Configurações do Redis (ajuste conforme necessário)
const redisOptions: RedisOptions = {
  host: "localhost",
  port: 6379,
};

// Worker para processar as tarefas da fila
const worker = new Worker(
  "taskQueue",
  async job => {
    console.log(`Processando tarefa: ${job.id} - Mensagem: ${job.data.message}`);
    // Simula um processamento de tarefa
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Tarefa concluída: ${job.id}`);
  },
  { connection: redisOptions }
);

worker.on("completed", job => {
  console.log(`Tarefa finalizada com sucesso: ${job.id}`);
});

worker.on("failed", (job, err) => {
  console.error(`Tarefa falhou: ${job.id} - Erro: ${err.message}`);
});

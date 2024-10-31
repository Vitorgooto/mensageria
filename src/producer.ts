// src/producer.ts
import { taskQueue } from "./queue";

async function addTask(message: string) {
  await taskQueue.add("simpleTask", { message });
  console.log(`Tarefa adicionada à fila: ${message}`);
}

// Exemplo de envio de mensagens
(async () => {
  await addTask("Processar pedido #1");
  await addTask("Enviar e-mail de confirmação");
})();

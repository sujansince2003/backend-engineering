import { Queue } from "bullmq";
const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

async function init() {
  const res = await notificationQueue.add("send notification", {
    fname: "sujan",
  });
  console.log("hello from queue inti", res.id);
}

init();

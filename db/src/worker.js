import { Worker } from "bullmq";

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("stating worker");
    console.log(job.data);
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);

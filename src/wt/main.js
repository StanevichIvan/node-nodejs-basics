// implement function that creates number of worker threads (equal to the number of host machine logical CPU cores)
// from file worker.js and able to send data to those threads and to receive result of the computation from them.
// You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores
// you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker.
// After all workers will finish, function should log array of results into console. The results are array of objects with
// 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Status = {
  Resolved: "resolved",
  Error: "error",
};

const performCalculations = async () => {
  const startData = 10;
  const workersNumber = availableParallelism();
  const workers = Array.from(
    { length: workersNumber },
    (v, i) =>
      new Worker(`${__dirname}/worker.js`, { workerData: i + startData })
  );

  const settledResults = await Promise.allSettled(
    workers.map((worker) => {
      return new Promise((resolve, reject) => {
        worker.on("message", (data) => {
          resolve(data);
        });

        worker.on("error", (err) => {
          reject(err);
        });
      });
    })
  );

  const results = settledResults.map((r) =>
    r.status === "fulfilled"
      ? { status: Status.Resolved, data: r.value }
      : { status: "error", data: null }
  );

  console.log(results);
};

await performCalculations();

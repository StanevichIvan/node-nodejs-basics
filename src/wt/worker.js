// extend given function to work with data received from main thread and implement
// function which sends result of the computation to the main thread
import {
  Worker,
  MessageChannel,
  MessagePort,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  //   console.log(workerData);

  parentPort.postMessage(nthFibonacci(workerData));

  //   const result = nthFibonacci(workerData.data);
  //   parentPort.postMessage();
  // This function sends result of nthFibonacci computations to main thread
  //   parentPort.once("message", (value) => {
  //     console.log(value);
  //     value.hereIsYourPort.postMessage("the worker is sending this");
  //     value.hereIsYourPort.close();
  //   });
};

sendResult();

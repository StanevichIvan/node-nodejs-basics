// implement function that reads data from process.stdin,
// reverses text using Transform Stream and then writes it into process.stdout
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import { stdout, stdin } from "node:process";

const reverseStream = new Transform({
  transform(chunk, _, callback) {
    callback(null, String(chunk).split("").reverse().join(""));
  },
});

const transform = async () => {
  try {
    await pipeline(stdin, reverseStream, stdout);
  } catch (e) {
    throw e;
  }
};

await transform();

// implement function that reads file fileToRead.txt content using Readable Stream
// and prints it's content into process.stdout
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { stdout } from "node:process";

const FILE_PATH = "./files/fileToRead.txt";

const read = async () => {
  // Write your code here
  try {
    await pipeline(createReadStream(FILE_PATH), stdout);
  } catch (e) {
    throw e;
  }
};

await read();

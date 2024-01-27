// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { stdin } from "node:process";

const FILE_PATH = "./files/fileToWrite.txt";

const write = async () => {
  try {
    await pipeline(stdin, createWriteStream(FILE_PATH));
  } catch (e) {
    throw e;
  }
};

await write();

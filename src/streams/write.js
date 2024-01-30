// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { stdin } from "node:process";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {
  try {
    await pipeline(stdin, createWriteStream(FILE_PATH));
  } catch (e) {
    throw e;
  }
};

await write();

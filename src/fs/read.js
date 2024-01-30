import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SOURCE_DIR = `${__dirname}/files`;
const FILE_NAME = "fileToRead.txt";
const ERROR_MESSAGE = "FS operation failed";

const read = async () => {
  try {
    const content = await readFile(`${SOURCE_DIR}/${FILE_NAME}`, {
      encoding: "utf8",
    });
    console.log(content);
  } catch (e) {
    throw ERROR_MESSAGE;
  }
};

await read();

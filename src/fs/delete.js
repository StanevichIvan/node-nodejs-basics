import { rm } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = `${__dirname}/files`;
const FILE_NAME = "fileToRemove.txt";
const ERROR_MESSAGE = "FS operation failed";

const remove = async () => {
  try {
    await rm(`${SOURCE_DIR}/${FILE_NAME}`);
  } catch (e) {
    throw ERROR_MESSAGE;
  }
};

await remove();

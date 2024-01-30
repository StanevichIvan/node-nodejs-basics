import { readdir } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = `${__dirname}/files`;
const ERROR_MESSAGE = "FS operation failed";

const list = async () => {
  try {
    const files = await readdir(SOURCE_DIR);
    for (const file of files) console.log(file);
  } catch (e) {
    throw ERROR_MESSAGE;
  }
};

await list();

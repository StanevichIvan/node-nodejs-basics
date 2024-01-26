import { readdir } from "node:fs/promises";

const SOURCE_DIR = "./files";
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

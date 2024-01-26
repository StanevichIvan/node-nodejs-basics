import { rm } from "node:fs/promises";

const SOURCE_DIR = "./files";
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

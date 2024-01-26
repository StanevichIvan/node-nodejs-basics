import { readFile } from "node:fs/promises";

const SOURCE_DIR = "./files";
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

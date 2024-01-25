import { open } from "node:fs/promises";

const FILE_NAME = "fresh.txt";
const PATH = "./files";
const ERROR_MESSAGE = "FS operation failed";
const FILE_CONTENT = "I am fresh and young";

const create = async () => {
  let file = null;

  try {
    file = await open(`${PATH}/${FILE_NAME}`, "wx");
    file.write(FILE_CONTENT);
  } catch (e) {
    if (e.code === "EEXIST") {
      throw ERROR_MESSAGE;
    }
  } finally {
    file?.close();
  }
};

await create();

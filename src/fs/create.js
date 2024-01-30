import { open } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_NAME = "fresh.txt";
const PATH = `${__dirname}/files`;
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

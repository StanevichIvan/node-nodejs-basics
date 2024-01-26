import { rename as renameFs } from "node:fs/promises";

const SOURCE_DIR = "./files";
const OLD_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const ERROR_MESSAGE = "FS operation failed";

const rename = async () => {
  try {
    renameFs(
      `${SOURCE_DIR}/${OLD_FILE_NAME}`,
      `${SOURCE_DIR}/${NEW_FILE_NAME}`
    );
  } catch (e) {
    throw ERROR_MESSAGE;
  }
};

await rename();

import { rename as renameFs } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = `${__dirname}/files`;
const OLD_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const ERROR_MESSAGE = "FS operation failed";

const rename = async () => {
  try {
    await renameFs(
      `${SOURCE_DIR}/${OLD_FILE_NAME}`,
      `${SOURCE_DIR}/${NEW_FILE_NAME}`
    );
  } catch (e) {
    throw ERROR_MESSAGE;
  }
};

await rename();

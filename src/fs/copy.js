import { cp } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = `${__dirname}/files`;
const DEST_DIR = `${__dirname}/files_copy`;
const ERROR_MESSAGE = "FS operation failed";

const copy = async () => {
  try {
    await cp(SOURCE_DIR, DEST_DIR, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    throw ERROR_MESSAGE;
  }
};

await copy();

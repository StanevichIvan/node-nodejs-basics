import { cp } from "node:fs/promises";

const SOURCE_DIR = "./files";
const DEST_DIR = "./files_copy";
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

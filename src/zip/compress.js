// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = `${__dirname}/files/fileToCompress.txt`;
const FILE_ARCHIVE_PATH = `${__dirname}/files/archive.gz`;

const compress = async () => {
  try {
    await pipeline(
      createReadStream(FILE_PATH),
      createGzip(),
      createWriteStream(FILE_ARCHIVE_PATH)
    );
  } catch (e) {
    throw e;
  }
};

await compress();

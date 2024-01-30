// implement function that decompresses archive.gz back to the fileToCompress.txt with same content
// as before compression using zlib and Streams API
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createUnzip } from "node:zlib";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = `${__dirname}/files/fileToCompress.txt`;
const FILE_ARCHIVE_PATH = `${__dirname}/files/archive.gz`;

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(FILE_ARCHIVE_PATH),
      createUnzip(),
      createWriteStream(FILE_PATH)
    );
  } catch (e) {
    throw e;
  }
};

await decompress();

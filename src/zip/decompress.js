// implement function that decompresses archive.gz back to the fileToCompress.txt with same content
// as before compression using zlib and Streams API
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const FILE_PATH = "./files/fileToCompress.txt";
const FILE_ARCHIVE_PATH = "./files/archive.gz";

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(FILE_ARCHIVE_PATH),
      createGzip(),
      createWriteStream(FILE_PATH)
    );
  } catch (e) {
    throw e;
  }
};

await decompress();

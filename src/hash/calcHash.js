import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const { createHash } = await import("node:crypto");
  const hash = createHash("sha256");

  const input = createReadStream(
    `${__dirname}/files/fileToCalculateHashFor.txt`
  );
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();

import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const calculateHash = async () => {
  const { createHash } = await import("node:crypto");
  const hash = createHash("sha256");

  const input = createReadStream("./files/fileToCalculateHashFor.txt");
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();

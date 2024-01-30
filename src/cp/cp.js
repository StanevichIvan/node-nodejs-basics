import { spawn } from "node:child_process";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = `${__dirname}/files/script.js`;

const spawnChildProcess = async (args) => {
  const child = spawn("node", [FILE_PATH, ...args]);
  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);

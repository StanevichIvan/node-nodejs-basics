import { argv, stdin } from "node:process";
import { spawn } from "node:child_process";
import { FILE } from "node:dns";

const FILE_PATH = "./files/script.js";

const spawnChildProcess = async (args) => {
  const child = spawn("node", [FILE_PATH, ...args]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stdin.pipe(stdin);

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);

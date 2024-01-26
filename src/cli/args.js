import { argv } from "node:process";

const convertToConsole = (key, value) => `${key} is ${value}`;
const isKey = (str) => str.startsWith("--");
const not =
  (func) =>
  (...args) =>
    !func(...args);

const parseArgs = () => {
  const cliArguments = argv.slice(2);
  const keys = cliArguments.filter(isKey).map((str) => str.slice(2));
  const values = cliArguments.filter(not(isKey));

  for (const [index, value] of keys.entries()) {
    console.log(convertToConsole(value, values[index]));
  }
};

parseArgs();

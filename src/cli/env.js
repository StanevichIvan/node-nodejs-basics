import { env } from "node:process";

const EVN_VARIABLE_PREFIX = "RSS_";

const parseEnv = () => {
  for (const key of Object.keys(env)) {
    console.log(`${EVN_VARIABLE_PREFIX}${key}=${env[key]}`);
  }
};

parseEnv();

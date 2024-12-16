import dotenv from "dotenv/config.js";

const SECRETS = {
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
};

export default SECRETS;

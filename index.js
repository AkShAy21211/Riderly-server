import { startExpressServer } from "./config/app.js";
import dotenv from "dotenv/config";
import path from "path";


const startServer = async () => {
  try {
    startExpressServer();
  } catch (error) {
    console.log(error);
  }
};

startServer();

import { startExpressServer } from "./config/app.js";
import dotenv from "dotenv/config.js";



const startServer = async () => {
  try {
    startExpressServer();
  } catch (error) {
    console.log(error);
  }
};

startServer();

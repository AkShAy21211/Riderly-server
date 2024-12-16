import mongoose from "mongoose";
import SECRETS from "./index.js";
async function connectDB() {
  mongoose
    .connect(SECRETS.MONGO_URI, {})
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error(err));
}

export default connectDB;

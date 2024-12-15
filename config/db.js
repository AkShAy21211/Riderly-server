import mongoose from "mongoose";

async function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI, {
    
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error(err));
}

export default connectDB;

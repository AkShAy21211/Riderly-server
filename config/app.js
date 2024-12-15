import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import connectDB from "./db.js";
import authRoute from "../routes/auth.route.js";

export const startExpressServer = () => {
  try {
    const PORT = process.env.PORT || 5000;
    connectDB();
    const app = express();

    const options = {
      key: fs.readFileSync("../key.pem"),
      cert: fs.readFileSync("../cert.pem"),
    };

    const server = https.createServer(options, app);

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({}));

    //====cors =====//

    app.use(
      cors({
        origin: ["https://localhost:5173", "https://192.168.1.3:5173"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      })
    );

    app.get("/api/test", (req, res) => {
      res.send("api running successfully");
    });

    //===== routes =====//
    app.use("/api/auth", authRoute);
    app.use("/api/customer", () => {});
    app.use("/api/driver", () => {});

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      //make some default
      res.status(404).json({ message: "Page not found" });
    });

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    return server;
  } catch (error) {
    console.log(error.message);
  }
};

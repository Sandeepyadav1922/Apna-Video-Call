import dotenv from 'dotenv';
import express from "express";
import { createServer } from "node:http";
dotenv.config();

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors({
    origin: [
        "https://apnacollegezoomfrontend-vdq1.onrender.com",
        "http://localhost:3000/"
    ]
}));
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

app.get("/home", (req, res) => {
    return res.json({"hello": "world"})
});

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected to mongoDB");
    server.listen(app.get("port"), () => {
        console.log("listing on port 8000")
    });

}

start();
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import streamController from "./controllers/streamController";
import checkAuth from "./middlewares/checkAuth";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use("/stream", checkAuth);

// ENDPOINTS
app.get("/stream", streamController);

app.listen(process.env.PORT, () => console.log("Server Started!"));

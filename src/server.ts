import dotenv from "dotenv";
dotenv.config();

import express from "express";
import logger from "./logger";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(logger);

// ENDPOINTS
app.get("/", (_, res) => {
  res.status(200).send("I am alive!");
});

app.listen(process.env.PORT, () => console.log("server started!"));

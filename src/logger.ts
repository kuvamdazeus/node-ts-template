import { NextFunction, Request, Response } from "express";

export default function handler(req: Request, _: Response, next: NextFunction) {
  console.log(
    `\n-> [${Date.now()}] ${req.method} ${req.url}${
      req.method === "POST" ? ":\nRequest Body - " + JSON.stringify(req.body) : ""
    }`
  );

  next();
}

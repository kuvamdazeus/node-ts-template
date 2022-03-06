import { NextFunction, Request, Response } from "express";

export default function handler(req: Request, _: Response, next: NextFunction) {
  let date = new Date().toString();
  date = date.slice(4, date.indexOf("GMT")).trim();

  console.log(
    `\n-> [${date}] ${req.method} ${req.url}${
      req.method === "POST" ? ":\nRequest Body - " + JSON.stringify(req.body) : ""
    }`
  );

  next();
}

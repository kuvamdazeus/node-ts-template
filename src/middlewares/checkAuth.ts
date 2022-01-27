import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function handler(req: Request, res: Response, next: NextFunction) {
  const q = req.query.q as string;

  if (!q) return res.status(400).send("😑");

  try {
    const { iat } = jwt.verify(q, process.env.JWT_SECRET as string) as JwtPayload;
    if (!iat || Date.now() - (iat as number) * 1000 > 5 * 60 * 1000) throw new Error("Token Invalid");

    next();

    return;
  } catch (err) {
    console.log(err);
    return res.status(401).send("🧐");
  }
}

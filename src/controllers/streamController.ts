import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import ytdl from "ytdl-core";

export default function handler(req: Request, res: Response) {
  // sign { url } with secret
  const q = req.query.q as string;
  const { url } = jwt.verify(q, process.env.JWT_SECRET as string) as JwtPayload;
  console.log(url);
  ytdl(url).pipe(res);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function handler(req, res, next) {
    const q = req.query.q;
    if (!q)
        return res.status(400).send("😑");
    try {
        const { iat } = jsonwebtoken_1.default.verify(q, process.env.JWT_SECRET);
        if (!iat || Date.now() - iat * 1000 > 5 * 60 * 1000)
            throw new Error("Token Invalid");
        next();
        return;
    }
    catch (err) {
        console.log(err);
        return res.status(401).send("🧐");
    }
}
exports.default = handler;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ytdl_core_1 = __importDefault(require("ytdl-core"));
function handler(req, res) {
    // sign { url } with secret
    const q = req.query.q;
    const { url } = jsonwebtoken_1.default.verify(q, process.env.JWT_SECRET);
    console.log(url);
    ytdl_core_1.default(url).pipe(res);
}
exports.default = handler;

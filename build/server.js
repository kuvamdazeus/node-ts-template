"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const streamController_1 = __importDefault(require("./controllers/streamController"));
const checkAuth_1 = __importDefault(require("./middlewares/checkAuth"));
const app = express_1.default();
// MIDDLEWARES
app.use(express_1.default.json());
app.use("/stream", checkAuth_1.default);
// ENDPOINTS
app.get("/stream", streamController_1.default);
app.listen(process.env.PORT, () => console.log("Server Started!"));

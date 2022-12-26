"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Express App that will provide connect Applications to google sheet");
const core_1 = __importDefault(require("./core"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
new core_1.default(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_SECRET_KEY, process.env.API_KEY);

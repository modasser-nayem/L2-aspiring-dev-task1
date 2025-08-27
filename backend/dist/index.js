"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./app/db");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const port = process.env.PORT || 5000;
            const server = (0, http_1.createServer)(app_1.default);
            yield (0, db_1.dbConnect)();
            server.listen(port, () => {
                console.log(`SERVER IS RUNNING ON PORT ${port}`);
            });
            // handle process events
            process.on("unhandledRejection", (err) => {
                console.error("Unhandled Rejection detected. Shutting down server...", err);
                server.close(() => process.exit(1));
            });
            process.on("uncaughtException", (err) => {
                console.error("Uncaught Exception detected. Shutting down server...", err);
                process.exit(1);
            });
        }
        catch (err) {
            console.error("Error starting server", err);
            process.exit(1);
        }
    });
}
main();

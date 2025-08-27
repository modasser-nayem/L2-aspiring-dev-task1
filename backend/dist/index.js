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
const logger_1 = __importDefault(require("./app/utils/logger"));
const db_1 = require("./app/db");
class AppServer {
    constructor() {
        this.port = process.env.PORT || 5000;
        this.server = (0, http_1.createServer)(app_1.default);
        this.startServer();
        this.databaseConnect();
        this.handleProcessEvents();
    }
    startServer() {
        this.server = app_1.default.listen(this.port, () => {
            logger_1.default.info(`SERVER IS RUNNING ON PORT ${this.port}`);
        });
    }
    databaseConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.dbConnect)();
        });
    }
    handleProcessEvents() {
        process.on("unhandledRejection", (err) => {
            console.error(`Unhandled Rejection detected. Shutting down server...`, err);
            this.shutdownServer();
        });
        process.on("uncaughtException", (err) => {
            console.error(`Uncaught Exception detected. Shutting down server...`, err);
            process.exit(1);
        });
    }
    shutdownServer() {
        if (this.server) {
            this.server.close(() => {
                process.exit(1);
            });
        }
        else {
            process.exit(1);
        }
    }
}
new AppServer();

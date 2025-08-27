import { createServer, Server } from "http";
import app from "./app";
import logger from "./app/utils/logger";
import { dbConnect } from "./app/db";

// class AppServer {
//   private port: number | string;
//   private server: Server;

//   constructor() {
//     this.port = process.env.PORT || 5000;
//     this.server = createServer(app);
//     this.startServer();
//     this.databaseConnect();
//     this.handleProcessEvents();
//   }

//   private startServer(): void {
//     this.server = app.listen(this.port, () => {
//       logger.info(`SERVER IS RUNNING ON PORT ${this.port}`);
//     });
//   }

//   private async databaseConnect(): Promise<void> {
//     await dbConnect();
//   }

//   private handleProcessEvents(): void {
//     process.on("unhandledRejection", (err) => {
//       console.error(
//         `Unhandled Rejection detected. Shutting down server...`,
//         err,
//       );
//       this.shutdownServer();
//     });

//     process.on("uncaughtException", (err) => {
//       console.error(
//         `Uncaught Exception detected. Shutting down server...`,
//         err,
//       );
//       process.exit(1);
//     });
//   }

//   private shutdownServer(): void {
//     if (this.server) {
//       this.server.close(() => {
//         process.exit(1);
//       });
//     } else {
//       process.exit(1);
//     }
//   }
// }

// new AppServer();

let server: Server = createServer(app);
const port = process.env.PORT || 5000;

async function main() {
  await dbConnect();
  server = app.listen(port, () => {
    logger.info(`SERVER IS RUNNING ON PORT ${port}`);
  });
}

function shutdownServer(): void {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
}

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection detected. Shutting down server...`, err);
  shutdownServer();
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception detected. Shutting down server...`, err);
  process.exit(1);
});

main();

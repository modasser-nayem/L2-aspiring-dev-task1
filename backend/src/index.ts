import { createServer } from "http";
import app from "./app";
import { dbConnect } from "./app/db";

async function main() {
  try {
    const port = process.env.PORT || 5000;
    const server = createServer(app);

    await dbConnect();
    server.listen(port, () => {
      console.log(`SERVER IS RUNNING ON PORT ${port}`);
    });

    // handle process events
    process.on("unhandledRejection", (err) => {
      console.error(
        "Unhandled Rejection detected. Shutting down server...",
        err,
      );
      server.close(() => process.exit(1));
    });

    process.on("uncaughtException", (err) => {
      console.error(
        "Uncaught Exception detected. Shutting down server...",
        err,
      );
      process.exit(1);
    });
  } catch (err) {
    console.error("Error starting server", err);
    process.exit(1);
  }
}

main();

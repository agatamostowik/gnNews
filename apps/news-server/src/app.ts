import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { rootRouter } from "./routes";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEWS_KEY: string;
    }
  }
}

export const initApp = () => {
  const app = express();

  // Global middlewares
  app.use(
    cors({
      origin: ["http://localhost:5173"],
    })
  );
  app.use(bodyParser.json());

  // Routes
  app.use("/", rootRouter);

  return app;
};

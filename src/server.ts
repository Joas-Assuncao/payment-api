import cors from "cors";
import express from "express";

import { errorHandler } from "./app/middlewares/errorHandler";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(routes);
app.use(errorHandler);

const PORT = 3001;

app.listen(PORT, () =>
  console.log(`🔥 Server started at http://localhost:${PORT}`)
);

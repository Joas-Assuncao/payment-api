import cors from "cors";
import express, { Request, Response, Router } from "express";

import { errorHandler } from "./app/middlewares/errorHandler";

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

const PORT = 3001;

app.listen(PORT, () =>
  console.log(`🔥 Server started at http://localhost:${PORT}`)
);

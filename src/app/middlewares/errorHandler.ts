import { Request, Response, NextFunction } from "express";

class CustomError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // Captura a pilha de erros no ambiente de desenvolvimento
    if (process.env.NODE_ENV === "development") {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { status, message, stack } = err;

  res.status(status).json({
    error: {
      status,
      message,
      stack: process.env.NODE_ENV === "development" ? stack : undefined,
    },
  });
}

export { CustomError, errorHandler };

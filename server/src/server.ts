import express, { Request, Response } from "express";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  res.send("The server is working");
});

export default app;

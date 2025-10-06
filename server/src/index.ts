import express, { type Application, type Request, type Response } from "express";

const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

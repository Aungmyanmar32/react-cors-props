import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = 5000;
app.use(cors());
const users = [{ name: "user1", email: "user1@gmail.com", age: 30 }];

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

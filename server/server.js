import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth-routes";
dotenv.config();
const port = process.env.PORT || 3001;

const app = express();

app.use(cor());
app.use(express.json());

app("/api/v1/lms", authRouter);

app.listen((port) => {
  console.log(`server is running on port ${port}`);
});

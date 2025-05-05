import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth-routes.js";

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/lms", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

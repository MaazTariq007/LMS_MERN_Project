import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth-routes.js";
import databaseConnection from "./database/connectToDb.js";

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
databaseConnection();

app.use("/api/v1/lms", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/utils/lib/dbconnection.js";
import routes from "./src/routes/routes.js";
import { notFound } from "./src/middlewares/errorMiddleware.js";
dotenv.config();
const app = express();
const port = process.env.APPLICATION_PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());
connectDb();

// Routes
app.use("/api/v1", routes);

app.use(notFound);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

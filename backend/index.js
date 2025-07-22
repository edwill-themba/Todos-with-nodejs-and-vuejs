import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import { protect } from "./middleware/authMiddliware.js";
import sequelize from "./connectdb/connectDB.js";

// config app with dotenv
dotenv.config();
// initialize express
const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//test connection
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection was estblished successfully");
  } catch (error) {
    console.error(`unabled to connect to the database ${error}`);
  }
};
await connection();

app.use("/api", todoRoutes);
app.use("/api/auth", authRoutes);

//error path middleware and put under routes
app.use(notFound);
app.use(errorHandler);
app.use(protect);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

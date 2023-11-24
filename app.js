import express from "express";
import connectDB from "./db/connectDB.js";
import web from "./routes/web.js";
import cors from "cors";
import dotenv from "dotenv";
const port = process.env.PORT || 4000;
const app = express();
dotenv.config();

//connect datbase
connectDB(process.env.DATABASE_URL);

//enable cors
app.use(cors());

//parse JSON  odies request
app.use(express.json());

//lod all routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

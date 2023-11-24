import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "Tasks",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Can't connect to database", error);
  }
};

export default connectDB;

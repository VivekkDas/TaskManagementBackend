import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
});

const taskModel = mongoose.model("Tasks", taskSchema);

export default taskModel;

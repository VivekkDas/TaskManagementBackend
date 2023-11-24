import mongoose from "mongoose";
import taskModel from "../models/siteModel.js";

class siteController {
  static createTask = async (req, res) => {
    const { title, status, date, description } = req.body;
    console.log(req.body);
    try {
      const result = new taskModel({
        title,
        status,
        date,
        description,
      });
      await result.save();
      res.json({ success: true, result });
    } catch (error) {
      console.log("Error adding Task", error);
    }
  };

  static getTask = async (req, res) => {
    try {
      const result = await taskModel.find();
      res.json({ success: true, result });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  static deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await taskModel.findByIdAndDelete(id);
      res.json({ success: true, result });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  static getDataForUpdate = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await taskModel.findById(id);
      res.json({ success: true, result });
    } catch (error) {
      console.log("Sonething went wrong", error);
    }
  };

  static updateTask = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await taskModel.findByIdAndUpdate(id, req.body);
      res.json({ success: true, result });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
}
export default siteController;

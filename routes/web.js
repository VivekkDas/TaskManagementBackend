import express from "express";
const router = express.Router();
import siteController from "../controller/siteController.js";

//post requests
router.post("/create", siteController.createTask);
router.delete("/deleteTask/:id", siteController.deleteTask);
router.put("/updateTask/:id", siteController.updateTask);

//get requests
router.get("/getTask", siteController.getTask);
router.get("/getDataForUpdate/:id", siteController.getDataForUpdate);

export default router;

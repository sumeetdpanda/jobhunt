import express from "express";
import {
  getAllJobs,
  getJobById,
  getJobByUserId,
  postJob,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getJobByUserId);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;

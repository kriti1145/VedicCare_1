import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile,
  toggleDoctorStatus,
} from "../Controllers/doctorControler.js";

import { authenticate, restrict } from "../author/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

// Toggle doctor active/inactive status — restricted to authenticated doctors
router.put(
  "/toggle-status/:id",
  authenticate,
  restrict(["doctor"]),
  toggleDoctorStatus
);

export default router;

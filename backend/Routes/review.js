import express from "express";
import { getAllReview, createReview } from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../author/verifyToken.js";

const router = express.Router({ mergeParams: true });
router
  .route("/")
  .get(getAllReview)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;

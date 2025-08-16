import express from "express";
import {
  changeBookingStatus,
  checkAvailability,
  createBooking,
  getOwnerBookings,
  getUserBookings,
} from "../controllers/bookingControllers.js";
import { protect } from "../middleware/auth.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailability);
bookingRouter.post("/create", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/owner", protect, getOwnerBookings);
bookingRouter.post("/change-status", protect, changeBookingStatus);

export default bookingRouter;

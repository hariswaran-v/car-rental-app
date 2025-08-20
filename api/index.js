// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "../server/configs/db.js";
// import userRouter from "../server/routes/userRoutes.js";
// import ownerRouter from "../server/routes/ownerRoutes.js";
// import bookingRouter from "../server/routes/bookingRoutes.js";

// // Initialize Express App
// const app = express();

// // Connect Database
// await connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("Server is running"));
// app.use("/api/user", userRouter);
// app.use("/api/owner", ownerRouter);
// app.use("/api/bookings", bookingRouter);

// export default app;

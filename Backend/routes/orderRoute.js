import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifiyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminauth.js";
import authUser from "../middleware/auth.js";

const ordersRouter = express.Router();

// Admin Features
ordersRouter.post("/list", adminAuth, allOrders);
ordersRouter.post("/status", adminAuth, updateStatus);

// Payment Features
ordersRouter.post("/place", authUser, placeOrder);
ordersRouter.post("/stripe", authUser, placeOrderStripe);
ordersRouter.post("/razorpay", authUser, placeOrderRazorpay);

// User Feature
ordersRouter.post("/userorders", authUser, userOrders);

// verifyPayment
ordersRouter.post("/verifyStripe", authUser, verifiyStripe);
ordersRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default ordersRouter;

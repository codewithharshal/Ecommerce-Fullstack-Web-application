import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRouter.js";
import ordersRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API ENDPOINTS
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", ordersRouter);

app.get("/", (req, res) => {
  res.send("WORKING GET");
});

// Start Server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

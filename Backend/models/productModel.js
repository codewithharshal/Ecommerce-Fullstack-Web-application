import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Product name is required"] },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: { type: Number, required: [true, "Product price is required"] },
  image: {
    type: [String],
    required: [true, "At least one product image is required"],
  },
  category: { type: String, required: [true, "Category is required"] },
  subCategory: { type: String, required: [true, "Sub-category is required"] },
  sizes: { type: [String], required: [true, "At least one size is required"] },
  bestseller: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;

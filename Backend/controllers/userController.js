import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

// Creating token for auth
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt for email:", email);
    const user = await userModel.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.json({
        success: false,
        message: "User doesn't exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      console.log("Login successful for email:", email);
      return res.status(200).json({
        success: true,
        token,
      });
    } else {
      console.log("Invalid credentials for email:", email);
      return res.json({
        success: false,
        message: "Invalid credential",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Registration attempt for email:", email);

    // Checking user is already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      console.log("User already exists for email:", email);
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    if (!validator.isEmail(email)) {
      // validating email format & strong password
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    // validating email format & strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter password with minimum 8 letter",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating User
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save User
    const user = await newUser.save();

    // Adding token for auth
    const token = createToken(user._id);
    console.log("Registration successful for email:", email);
    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for admin login
const AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credential" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { loginUser, registerUser, AdminLogin };

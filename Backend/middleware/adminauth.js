import jwt from "jsonwebtoken";
const adminAuth = async (req, res, next) => {
  try {
    // get auth token from req header
    const { token } = req.headers;
    // Authorize token
    if (!token) {
      return res.json({ success: false, message: "Not Authorize" });
    }

    // Authorize token with owner token that generated with our email and password
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorize" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

export default adminAuth;

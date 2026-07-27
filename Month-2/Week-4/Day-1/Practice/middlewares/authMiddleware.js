const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(500)
        .json({ success: false, message: "kindly send the token" });
    }
    const { userId } = await jwt.verify(token, process.env.SECRET_KEY);

    const existingUser = await User.findById(userId).select("-password");

    if (!existingUser) {
      return res.status(404).json({ success: false, message: "Invalid token" });
    }

    next()
  } catch (error) {
    return res.status(500).json({success:false,message:"failed to verify token"})
  }
};

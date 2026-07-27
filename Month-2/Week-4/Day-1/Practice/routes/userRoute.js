const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/fetch", protect, getAllUsers);
router.put("/update/:id",protect, updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;

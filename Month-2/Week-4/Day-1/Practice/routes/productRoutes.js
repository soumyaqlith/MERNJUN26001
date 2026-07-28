const express = require("express");
const { createProduct, getProducts } = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", protect, createProduct);
router.get("/get-all",getProducts)

module.exports = router;

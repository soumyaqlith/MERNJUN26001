const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, stocks } = req.body;

    if (!title || !price || !stocks) {
      return res
        .status(500)
        .json({ success: false, message: "kindly fill the field" });
    }

    const product = new Product({
      title,
      description,
      price,
      stocks,
      createdBy: req.user,
    });
    await product.save();

    return res
      .status(201)
      .json({ success: true, message: "successfully created" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to create" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("createdBy","fullName age email");

    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "products is empty" });
    }

    return res
      .status(200)
      .json({ success: true, message: "successfully fetched", products });
  } catch (error) {
    return res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

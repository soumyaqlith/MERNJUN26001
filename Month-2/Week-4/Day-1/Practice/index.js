const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const userRoute = require("./routes/userRoute");
const productRoutes = require("./routes/productRoutes");

const server = express();

server.use(express.json());
server.use(cors());
connectDb();

server.use("/user", userRoute);
server.use("/product", productRoutes);

server.use("/run", (req, res) => {
  res.send("hello app is running");
});

server.listen(8000, () => {
  console.log("my server is running ha Ha Ha Bye ...");
});

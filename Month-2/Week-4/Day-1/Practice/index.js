const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/userRoute");

const server = express();

server.use(express.json());
connectDb();

server.use("/user", userRoute);

server.use("/run", (req, res) => {
  res.send("hello app is running");
});

server.listen(8000, () => {
  console.log("my server is running ha Ha Ha Bye ...");
});

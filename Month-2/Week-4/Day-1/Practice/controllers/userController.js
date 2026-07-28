const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    // fetch the data from the req.body
    // validate all the field i.e all field data are coming or not
    // covert the password to hash format (by bcrypt)
    // save the user
    // send the proper view ( data with message)
    const { fullName, age, email, password } = req.body;

    if (!fullName || !age || !email || !password) {
      return res
        .status(500)
        .json({ success: false, message: "kindly fill all the field" });
    }

    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exist" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      const user = new User({ fullName, age, email, password: hash });
      await user.save();

      return res
        .status(201)
        .json({ success: true, message: "successfully created" });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to create" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // get the user data from req.body
    // validate the field
    // validate the new user exist or not (to validate the password we have to use the comapre method)
    // after send the view

    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(500)
        .json({ success: false, message: "kindly fill all the field" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      bcrypt.compare(
        password,
        existingUser.password,
        async function (err, result) {
          if (result === true) {
            let token = await jwt.sign(
              {
                userId: existingUser._id,
              },
              process.env.SECRET_KEY,
              { expiresIn: "1h" },
            );
            return res
              .status(200)
              .json({ success: true, message: "Login success", token });
          } else {
            return res
              .status(404)
              .json({ success: false, message: "Invalid Password" });
          }
        },
      );
    } else {
      return res.status(404).json({ success: false, message: "Invalid email" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to create" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    // res.send("get requrest called",users);
    res.json({ message: "successfully fetched", users });
  } catch (error) {
    res.json({ message: "failed to fetch", error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updateUser = await User.findByIdAndUpdate(id, data);

    res.json({ message: "successfully user updated" });
  } catch (error) {
    res.json({ message: "failed to update" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.json({ message: "delete successfull" });
  } catch (error) {
    res.json({ message: "failed to delete" });
  }
};

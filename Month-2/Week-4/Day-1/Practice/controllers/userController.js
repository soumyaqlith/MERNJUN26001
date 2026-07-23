const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

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

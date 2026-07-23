const express=require("express");
const { createUser, getAllUsers, updateUser, deleteUser } = require("../controllers/userController");

const router=express.Router();


router.post("/create",createUser);
router.get("/fetch",getAllUsers);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);


module.exports=router
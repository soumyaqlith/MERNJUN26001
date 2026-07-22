const mongoose =require("mongoose");

async function connectDb(){
    try {
        const conne=await mongoose.connect(process.env.MONGO_URL);
        console.log("My Db connected")
    } catch (error) {
        console.log("failed to connect with DB")
    }
}

module.exports=connectDb

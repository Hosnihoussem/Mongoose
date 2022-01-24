const mongose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
  try {
    await mongose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db not connected");
  }
};

module.exports = connectDB;
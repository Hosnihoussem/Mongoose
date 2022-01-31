const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName:{type:String },
  age: {type: Number, min :16 , max: 80},
  email: { type: String, required: true},
  adress : String,
  date: { type: Date, default: Date.now },
});
module.exports = User = mongoose.model("UserCollection", userSchema);
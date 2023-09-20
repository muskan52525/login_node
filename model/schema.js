const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  }
});
module.exports = mongoose.model("User", userSchema );

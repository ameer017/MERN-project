const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, require: true},
  password: {type: String, require: true},
  roles: [{
    type: String,
    default : 'Employees'
  }],
  active: {
    type: Boolean,
    default: true
  }
//   refreshToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  email: String,
  password: String
});

const ModelClass = mongoose.model("user", UserSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  forename: String,
  surname: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  team: String
});

module.exports = mongoose.model('user', UserSchema);
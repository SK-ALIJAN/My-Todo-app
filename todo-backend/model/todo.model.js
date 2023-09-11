const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  todo: { type: String, required: true },
  status: { type: Boolean, required: true },
});

let TodoModel = mongoose.model("todo", userSchema);

module.exports = {
  TodoModel,
};

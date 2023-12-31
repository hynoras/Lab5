const mongoose = require("mongoose");

const messagingSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const messages = mongoose.model("messages", messagingSchema);

module.exports = messages;

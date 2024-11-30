const mongoose = require("mongoose");

const blacklistToken = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // TTL index to auto-delete after 24 hours
  },
});

// Create the model
const Blacklist = mongoose.model("Blacklist", blacklistToken);

module.exports = Blacklist;

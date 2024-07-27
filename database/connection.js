// db.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/superlive_bot", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = true;

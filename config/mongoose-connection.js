const mongoose = require('mongoose');
const debug = require('debug')("development:mongoose");

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not set");
}

mongoose.connect(MONGO_URI)
  .then(() => {
    debug("Connected to MongoDB");
  })
  .catch((err) => {
    debug("Error connecting to MongoDB:", err);
  });

module.exports = mongoose.connection;
const mongoose = require('mongoose');

// Define the schema correctly using mongoose.Schema
const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isadmin: {
        type: Boolean,
        default: false
    },
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstin: String
});

// Create and export the model
module.exports = mongoose.model("Owner", ownerSchema);

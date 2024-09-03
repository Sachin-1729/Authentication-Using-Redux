const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Create and export the model
const User = mongoose.model('User', userSchema, 'users'); // Corrected to mongoose.model

module.exports = User;

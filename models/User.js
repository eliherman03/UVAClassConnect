// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String, // @virginia.edu
    name: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
});

module.exports = mongoose.model('User', userSchema);

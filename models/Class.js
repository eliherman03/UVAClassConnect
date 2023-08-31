// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    ClassNumber: Number,
    Mnemonic: String,
    Number: String,
    Section: String,
    Type: String,
    Instructor: String,
    Days: String,
    Room: String
}); // , { bufferCommands: false }

module.exports = mongoose.model('Class', classSchema);

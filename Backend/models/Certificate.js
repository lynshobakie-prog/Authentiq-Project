const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    major: { type: String, required: true },
    university: { type: String, required: true },
    issueDate: { type: Date, default: Date.now },
    certHash: { type: String, required: true, unique: true } 
});

module.exports = mongoose.model('Certificate', certificateSchema);
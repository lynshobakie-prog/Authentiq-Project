const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    category: { type: String, required: true },
    universityName: { type: String, required: true },
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    major: { type: String, required: true },
    issueDate: { type: String, required: true }
});

module.exports = mongoose.model('Certificate', certificateSchema);
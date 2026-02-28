const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    category: { 
        type: String, 
        required: true, 
        enum: ['University', 'Course'] 
    },
    studentName: { type: String, required: true },
    issueDate: { type: Date, required: true },
    certificateId: { type: String, unique: true, required: true }, // رقم الشهادة الموحد

    // بيانات الجامعة
    universityName: { type: String },
    major: { type: String },
    studentId: { type: String }, 

    // بيانات الكورس
    courseTitle: { type: String },
    providerName: { type: String }, 
    duration: { type: String }      

}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    category: { 
        type: String, 
        required: true 
        // حذفنا الـ enum لكي لا يرفض السيرفر أي كلمة نكتبها
    },
    studentName: { type: String, required: true },
    issueDate: { type: Date, required: true },
    certificateId: { type: String, unique: true, required: true },

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
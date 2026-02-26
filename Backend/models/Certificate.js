const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentID: { type: String, required: true }, // الرقم التعريفي (جامعي أو وطني)
    
    // التعديل الجديد للفئات
    category: { 
        type: String, 
        required: true, 
        enum: ['University Degree', 'Course Certificate', 'Training Workshop', 'Professional License'],
        default: 'University Degree'
    },
    
    issuer: { type: String, required: true }, // الجهة المصدرة (مثلاً: جامعة البلقاء، منصة إدراك)
    major: { type: String, required: true }, // التخصص أو اسم الدورة
    
    issueDate: { type: Date, default: Date.now },
    blockchainHash: { type: String }, // سيملأ لاحقاً
    status: { type: String, default: 'Pending' } // حالة الشهادة (Pending, Verified, Revoked)
});

module.exports = mongoose.model('Certificate', CertificateSchema);
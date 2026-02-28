const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Certificate = require('./models/Certificate');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/add-certificate', async (req, res) => {
    try {
        const newCert = new Certificate(req.body);
        await newCert.save();
        res.status(201).send("تمت الإضافة بنجاح");
    } catch (e) { res.status(400).send(e.message); }
});

// نقطة البحث الموحدة
app.get('/verify', async (req, res) => {
    try {
        const { type, id } = req.query; // السيرفر بيسأل: شو النوع؟ وشو الرقم؟

        let query = {};
        if (type === 'University') {
            query = { category: 'University', studentId: id }; // ابحث بالرقم الجامعي
        } else if (type === 'Course') {
            query = { category: 'Course', certificateId: id }; // ابحث برقم الشهادة
        }

        const result = await Certificate.findOne(query);
        
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "لم يتم العثور على هذه الشهادة" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// هذا الرابط مبدئي، سنغيره لاحقاً عند إنشاء قاعدة البيانات
const MONGO_URI = "mongodb+srv://lynshobakie_db_user:mJsY1qXfPIOlMA8K@cluster0.ybgjkan.mongodb.net/?appName=Cluster0"; 

mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB successfully! ✅"))
    .catch((err) => console.log("Failed to connect to MongoDB ❌", err));

app.get('/', (req, res) => {
    res.send('Authentiq Backend is Live!');
});

const PORT = 5000;

// كود مؤقت لإضافة شهادة تجريبية
const createTestCert = async () => {
    const check = await Certificate.findOne({ certificateId: "AUTH-101" });
    if (!check) {
        await Certificate.create({
            studentName: "Layan", 
            university: "Authentiq University",
            certificateId: "AUTH-101",
            major: "Software Engineering"
        });
        console.log("Test certificate created! 🎓");
    }
};
createTestCert();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
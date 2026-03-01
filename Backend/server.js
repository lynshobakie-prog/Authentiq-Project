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
        const { type, id } = req.query; // استلام النوع والرقم من الرابط

        let query = {};
        if (type === 'University') {
            // إذا كان البحث عن جامعة، نبحث في studentId أو certificateId
            query = { 
                category: 'University', 
                $or: [{ certificateId: id }, { studentId: id }] 
            };
        } else if (type === 'Course') {
            // إذا كان البحث عن كورس، نبحث في certificateId فقط
            query = { 
                category: 'Course', 
                certificateId: id 
            };
        }

        const result = await Certificate.findOne(query);
        
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: `No ${type} certificate found with this ID` });
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

const createTestCert = async () => {
    try {
        // سنستخدم رقماً جديداً كلياً لنضمن أن قاعدة البيانات ستنشئه الآن
        const testID = "AUTH-2026"; 
        const check = await Certificate.findOne({ certificateId: testID });
        
        if (!check) {
            await Certificate.create({
                studentName: "Layan Shobaki", 
                university: "Authentiq Academy",
                certificateId: testID,
                major: "Full Stack Development",
                issueDate: new Date(),
                category: "Course" // هذا يجب أن يطابق اختيارك في الـ Dropdown
            });
            console.log("🚀 New matching certificate created: AUTH-2026");
        } else {
            console.log("👌 Test certificate AUTH-2026 is ready!");
        }
    } catch (err) {
        console.log("❌ Error creating cert:", err.message);
    }
};

createTestCert();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
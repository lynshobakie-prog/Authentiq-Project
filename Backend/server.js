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

// وظيفة لجلب وعرض جميع الشهادات المخزنة في السحاب
app.get('/verify-certificate', async (req, res) => {
    try {
        const { category, university, id } = req.query;

        // هذا السطر سيوضح لكِ في التيرمينال ماذا وصل للسيرفر فعلياً
        console.log("طلب بحث جديد:", { category, university, id });

        const cert = await Certificate.findOne({ 
            category: category, 
            universityName: university, 
            studentId: id 
        });

        if (cert) {
            res.json(cert);
        } else {
            res.status(404).send("لم يتم العثور على الشهادة");
        }
    } catch (e) {
        res.status(500).send(e.message);
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
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
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
        res.status(201).send("Done! Certificate saved to Cloud. ✅");
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

// وظيفة لجلب وعرض جميع الشهادات المخزنة في السحاب
app.get('/all-certificates', async (req, res) => {
    try {
        const allCerts = await Certificate.find(); // أمر المونجو للبحث عن كل المستندات
        res.status(200).json(allCerts); // إرسال النتائج بصيغة JSON
    } catch (error) {
        res.status(500).json({ error: "Could not fetch data: " + error.message });
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
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

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
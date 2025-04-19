
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminroute from './routes/Admin/auth.js'
import diseaseroute from './routes/Disease/disease.js'
import passport from 'passport';
import { v2 as cloudinary } from "cloudinary"
dotenv.config();
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', adminroute)
app.use('/api', diseaseroute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

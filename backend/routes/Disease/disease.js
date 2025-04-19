import 'dotenv/config';
import express from 'express'
import multer from 'multer';
const storage = multer.memoryStorage(); 
const upload = multer({ storage });
import Disease from '../../models/Disease.js';
import { v2 as cloudinary } from "cloudinary"

const route = express.Router();


// Create a new disease
route.post('/diseases', upload.single('image'), async (req, res) => {
  try {
    const { name, category, description } = req.body;
    let imageUrl = '';
    console.log('Request file:', req.file); 
    if (req.file) {

      imageUrl = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'diseases', resource_type: 'image' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary Upload Error:', error);
              reject(error);
            } else {
              console.log('Cloudinary Upload Result:', result);
              resolve(result.secure_url);
            }
          }
        );
        uploadStream.end(req.file.buffer);
      });
    }
    const newDisease = new Disease({ name, category, image: imageUrl, description });
    const savedDisease = await newDisease.save();
    res.status(201).json(savedDisease);
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ message: error.message });
  }
});

// get all diseases
route.get('/diseases', async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.status(200).json(diseases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a single disease by  id
route.get('/diseases/:id', async (req, res) => {
  try {
    const disease = await Disease.findById(req.params.id);
    if (!disease) return res.status(404).json({ message: 'Disease not found' });
    res.status(200).json(disease);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a disease 
route.put('/diseases/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, category, description } = req.body;
    const updateData = { name, category, description };
    const disease = await Disease.findById(req.params.id);
    if (!disease) return res.status(404).json({ message: 'Disease not found' });

    if (req.file) {
      if (disease.image) {
        const publicId = disease.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`diseases/${publicId}`);
      }

      const result = await cloudinary.uploader.upload_stream(
        { folder: 'diseases', resource_type: 'image' },
        (error, result) => {
          if (error) {
            throw new Error(error.message);
          }
          return result;
        }
      ).end(req.file.buffer);
      updateData.image = result.secure_url;
    }

    const updatedDisease = await Disease.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedDisease);
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ message: error.message });
  }
});

// Delete a disease by id
route.delete('/diseases/:id', async (req, res) => {
  try {
    const disease = await Disease.findById(req.params.id);
    if (!disease) return res.status(404).json({ message: 'Disease not found' });


    if (disease.image) {
      const publicId = disease.image.split('/').pop().split('.')[0]; 
      await cloudinary.uploader.destroy(`diseases/${publicId}`);
    }

    await Disease.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Disease deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default route;
import mongoose from 'mongoose'

const diseaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String }, 
    description: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const Disease = mongoose.model('Disease', diseaseSchema);

export default Disease;
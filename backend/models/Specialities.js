import mongoose from 'mongoose'

const specialitiesSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    image: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const Specialities = mongoose.model('Specialities', specialitiesSchema);

export default Specialities;
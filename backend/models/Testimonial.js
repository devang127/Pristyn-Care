import mongoose from 'mongoose'


const testimonialSchema = new Schema({
    name: { type: String, required: true },
    reviewStar: { type: Number, required: true, min: 1, max: 5 },
    recommends: { type: Boolean, default: false },
    description: { type: String },
    city: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
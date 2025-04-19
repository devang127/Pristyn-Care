import mongoose from 'mongoose'

const faqSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const FAQ = mongoose.model('FAQ', faqSchema);

export default FAQ
import mongoose from 'mongoose'

const consultFormSchema = new Schema({
    patientName: { type: String, required: true },
    patientNumber: { type: Number, required: true },
    patientCity: { type: String, required: true },
    disease_id: { type: Schema.Types.ObjectId, ref: 'Disease', required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const ConsultForm = mongoose.model('ConsultForm', consultFormSchema);

export default ConsultForm;
import mongoose from 'mongoose'
import bcryptjs from 'bcrypt'


const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Date, required: true },
  emailVerificationStatus: { type: String, default: 'pending', enum: ['verified', 'pending', 'expired'] },
  rememberToken: { type: String },
}, {
  timestamps: true
}
);

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;


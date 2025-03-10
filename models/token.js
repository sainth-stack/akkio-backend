import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  key: String,
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const UserModel = mongoose.model('Token', UserSchema);
export default UserModel;

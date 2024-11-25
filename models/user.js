import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;

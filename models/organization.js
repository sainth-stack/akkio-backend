import mongoose from 'mongoose';

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const OrganizationModel = mongoose.model('Organization', OrganizationSchema);

export default OrganizationModel;

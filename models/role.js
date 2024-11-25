import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., "Admin", "Editor", "Viewer"
    permissions: [{ type: String, required: true }], // e.g., ["create_user", "edit_user", "delete_user"]
  });
  
  const RoleModel = mongoose.model('Role', RoleSchema);
  
  export default RoleModel;
  
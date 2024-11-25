import express from 'express';
import {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole
} from '../controllers/roleController.js';

const router = express.Router();

// Create a new role
router.post('/', createRole);

// Get all roles
router.get('/', getRoles);

// Get single role by ID
router.get('/:id', getRoleById);

// Update role
router.put('/:id', updateRole);

// Delete role
router.delete('/:id', deleteRole);

export default router;

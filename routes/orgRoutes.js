import express from 'express';
import {
  createOrganization,
  getOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization
} from '../controllers/orgControllers.js';

const router = express.Router();

// Create a new organization
router.post('/', createOrganization);

// Get all organizations
router.get('/', getOrganizations);

// Get organization by ID
router.get('/:id', getOrganizationById);

// Update organization
router.put('/:id', updateOrganization);

// Delete organization
router.delete('/:id', deleteOrganization);

export default router;

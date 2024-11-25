import express from 'express';
import {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/users/',  getAllUsers);
router.get('/user/:id',  getUserById);
router.put('/user/:id',  updateUserById);
router.delete('/user/:id',  deleteUser);

export default router;

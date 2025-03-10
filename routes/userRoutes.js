import express from 'express';
import {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUser,
    updateToken,
    getToken
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/users/',  getAllUsers);
router.get('/user/:id',  getUserById);
router.put('/user/:id',  updateUserById);
router.delete('/user/:id',  deleteUser);
router.put('/update-token',  updateToken);
router.get('/get-token',  getToken);

export default router;

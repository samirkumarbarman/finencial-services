import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', authMiddleware.protect, userController.getUserById);
router.put('/:id', authMiddleware.protect, userController.updateUser);

export default router;
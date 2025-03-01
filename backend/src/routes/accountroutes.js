import express from 'express';
import accountController from '../controllers/accountController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:userId', authMiddleware.protect, accountController.getAccountByUserId);

export default router;
import express from 'express';
import transactionController from '../controllers/transactionController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware.protect, transactionController.createTransaction);
router.get('/:userId', authMiddleware.protect, transactionController.getTransactionsByUserId);

export default router;
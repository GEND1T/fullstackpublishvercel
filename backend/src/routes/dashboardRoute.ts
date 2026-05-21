import { Router } from 'express';
import { getDashboardSummary } from '../controllers/dashboardController.js';

const router = Router();

// Endpoint ini akan menjadi GET /api/dashboard
router.get('/', getDashboardSummary);

export default router;
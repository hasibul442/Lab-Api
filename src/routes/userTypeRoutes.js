import express from 'express';
import { createUserType, getUserTypes } from '../controllers/UserTypeController.js';

const router = express.Router();

router.get("/", getUserTypes);
router.post("/", createUserType);

export default router;
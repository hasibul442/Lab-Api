import express from 'express';
import { createUserType, deleteUserType, getUserTypeById, getUserTypes, updateUserType } from '../controllers/UserTypeController.js';

const router = express.Router();

router.get("/", getUserTypes);
router.post("/", createUserType);
router.get("/:id", getUserTypeById);
router.put("/:id", updateUserType);
router.delete("/:id", deleteUserType);

export default router;
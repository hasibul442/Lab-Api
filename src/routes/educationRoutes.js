import express from 'express';
import { createEducation, deleteEducation, getEducation, getEducationById, updateEducation } from '../controllers/EducationController.js';

const router = express.Router();

router.get("/", getEducation);
router.post("/", createEducation);
router.get("/:id", getEducationById);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;
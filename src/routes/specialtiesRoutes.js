import express from 'express';
import { createSpecialty, deleteSpecialtyData, getSpecialties, getSpecialty, updateSpecialtyData } from '../controllers/SpecialitiesController.js';

const router = express.Router();

router.get("/", getSpecialties);
router.post("/", createSpecialty);
router.get("/:id", getSpecialty);
router.put("/:id", updateSpecialtyData);
router.delete("/:id", deleteSpecialtyData);

export default router;
import express from 'express';
import { createUnit, deleteUnitData, getUnit, getUnitData, updateUnitData } from "../controllers/UnitController.js";


const router = express.Router();

router.get("/", getUnitData);
router.post("/", createUnit);
router.get("/:id", getUnit);
router.put("/:id", updateUnitData);
router.delete("/:id", deleteUnitData);

export default router;

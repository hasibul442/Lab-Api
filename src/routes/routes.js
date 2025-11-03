import express from "express";
import { healthCheck } from "../controllers/HealthController.js";
import { homeData } from "../controllers/HomeController.js";
import { createUnit, deleteUnitData, getUnit, getUnitData, updateUnitData } from "../controllers/UnitController.js";

const router = express.Router();

router.get("/health", healthCheck);

router.get("/home", homeData);

router.get("/unit", getUnitData);
router.post("/unit", createUnit);
router.get("/unit/:id", getUnit);
router.put("/unit/:id", updateUnitData);
router.delete("/unit/:id", deleteUnitData);


export default router;
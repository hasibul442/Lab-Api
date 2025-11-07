import express from "express";
import { healthCheck } from "../controllers/HealthController.js";
import { homeData } from "../controllers/HomeController.js";
import { createSpecialty, deleteSpecialtyData, getSpecialties, getSpecialty, updateSpecialtyData } from "../controllers/SpecialitiesController.js";
import unitRoutes from "./unitRoutes.js";
import userTypeRoutes from "./userTypeRoutes.js";
import roleRoutes from "./roleRoutes.js";
import testRoutes from "./testRoutes.js";
import educationRoutes from "./educationRoutes.js";
import specialtiesRoutes from "./specialtiesRoutes.js";

const router = express.Router();

router.get("/health", healthCheck);
router.get("/home", homeData);

router.use('/user-types', userTypeRoutes);
router.use('/unit', unitRoutes);
router.use('/role', roleRoutes);
router.use('/test', testRoutes);
router.use("/settings/education", educationRoutes);
router.use("/settings/specialties", specialtiesRoutes);


export default router;

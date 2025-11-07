import express from "express";
import { healthCheck } from "../controllers/HealthController.js";
import { homeData } from "../controllers/HomeController.js";
import { deleteRoleData, getRole, getRoles, storeRole, updateRoleData } from "../controllers/RoleController.js";
import { createTest, deleteTestData, getTest, getTestList, updateTestData } from "../controllers/TestController.js";
import { createTestCategory, deleteTestCategory, getTestCategory, getTestCategoryList, updateTestCategory } from "../controllers/TestCategoryController.js";
import { createEducation, deleteEducation, getEducation, getEducationById, updateEducation } from "../controllers/EducationController.js";
import { createSpecialty, deleteSpecialtyData, getSpecialties, getSpecialty, updateSpecialtyData } from "../controllers/SpecialitiesController.js";
import unitRoutes from "./unitRoutes.js";
import userTypeRoutes from "./userTypeRoutes.js";

const router = express.Router();

router.get("/health", healthCheck);

router.get("/home", homeData);

router.use('/user-types', userTypeRoutes);
router.use('/unit', unitRoutes);

router.get("/role", getRoles);
router.post("/role", storeRole);
router.get("/role/:id", getRole);
router.put("/role/:id", updateRoleData);
router.delete("/role/:id", deleteRoleData);

router.get("/test", getTestList);
router.post("/test", createTest);
router.get("/test/data/:id", getTest);
router.put("/test/update/:id", updateTestData);
router.delete("/test/delete/:id", deleteTestData);

router.get("/test/category", getTestCategoryList);
router.post("/test/category", createTestCategory);
router.get("/test/category/:id", getTestCategory);
router.put("/test/category/:id", updateTestCategory);
router.delete("/test/category/:id", deleteTestCategory);

router.get("/settings/education", getEducation);
router.post("/settings/education", createEducation);
router.get("/settings/education/:id", getEducationById);
router.put("/settings/education/:id", updateEducation);
router.delete("/settings/education/:id", deleteEducation);

router.get("/settings/specialties", getSpecialties);
router.post("/settings/specialties", createSpecialty);
router.get("/settings/specialties/:id", getSpecialty);
router.put("/settings/specialties/:id", updateSpecialtyData);
router.delete("/settings/specialties/:id", deleteSpecialtyData);

export default router;

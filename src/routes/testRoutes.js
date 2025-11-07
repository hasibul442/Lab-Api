import express from 'express';
import { createTest, deleteTestData, getTest, getTestList, updateTestData } from '../controllers/TestController.js';
import { createTestCategory, deleteTestCategory, getTestCategory, getTestCategoryList, updateTestCategory } from '../controllers/TestCategoryController.js';

const router = express.Router();

router.get("/category", getTestCategoryList);
router.post("/category", createTestCategory);
router.get("/category/:id", getTestCategory);
router.put("/category/:id", updateTestCategory);
router.delete("/category/:id", deleteTestCategory);

router.get("/", getTestList);
router.post("/", createTest);
router.get("/data/:id", getTest);
router.put("/update/:id", updateTestData);
router.delete("/delete/:id", deleteTestData);

export default router;
import express from 'express';
import { deleteRoleData, getRole, getRoles, storeRole, updateRoleData } from '../controllers/RoleController.js';

const router = express.Router();

router.get("/", getRoles);
router.post("/", storeRole);
router.get("/role/:id", getRole);
router.put("/role/:id", updateRoleData);
router.delete("/role/:id", deleteRoleData);

export default router;

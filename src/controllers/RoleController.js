import { createRole, deleteRole, getAllRoles, getRoleById, updateRole } from "../services/RoleService.js";

export async function getRoles(req, res, next) {
    try {
        const roles = await getAllRoles(req);
        res.status(200).json({
            success: true,
            message: "Role data fetched successfully",
            data: roles
        });
    } catch (error) {
        next(error);
    }
}
    
export async function storeRole(req, res, next) {
    try {
        const role = await createRole(req.body);
        res.status(201).json({
            success: true,
            message: "Role created successfully",
            data: role
        });
    } catch (error) {
        next(error);
    }
}

export async function getRole(req, res, next) {
    try {
        const roleId = req.params.id;
        const role = await getRoleById(roleId);
        if (!role) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Role fetched successfully",
            data: role
        });
    } catch (error) {
        next(error);
    }
}

export async function updateRoleData(req, res, next) {
    try {
        const roleId = req.params.id;
        const updatedRole = await updateRole(roleId, req.body);
        if (!updatedRole) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Role updated successfully",
            data: updatedRole
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteRoleData(req, res, next) {
    try {
        const roleId = req.params.id;
        const deletedRole = await deleteRole(roleId);
        if (!deletedRole) {
            return res.status(404).json({
                success: false,
                message: "Role not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Role deleted successfully",
            data: deletedRole
        });
    } catch (error) {
        next(error);
    }
}
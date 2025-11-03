import { getAllRoles } from "../services/RoleService.js";

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
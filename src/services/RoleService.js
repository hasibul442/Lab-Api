import Role from "../models/Role.js";

export async function getAllRoles(req)  {
    const roleData = await Role.find();
    return roleData;
}

export async function createRole(roleInfo) {
    const newRole = new Role(roleInfo);
    await newRole.save();
    return newRole;
}

export async function getRoleById(roleId) {
    const role = await Role.findById(roleId);
    return role;
}

export async function updateRole(roleId, roleInfo) {
    const updatedRole = await Role.findByIdAndUpdate(roleId, roleInfo, { new: true });
    return updatedRole;
} 

export async function deleteRole(roleId) {
    const deletedRole = await Role.findByIdAndDelete(roleId);
    return deletedRole;
}
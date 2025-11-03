import Role from "../models/Role.js";

export async function getAllRoles(req)  {
    const roleData = await Role.find();
    return roleData;
}
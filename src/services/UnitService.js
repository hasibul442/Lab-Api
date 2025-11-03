import Units from "../models/Units.js";

export async function getAllUnits(req)  {
    const unitData = await Units.find();
    return unitData;
}

export async function storeUnit(reqData) {
    try {
        const newUnit = new Units(reqData);
        const savedUnit = await newUnit.save();
        return savedUnit;
    } catch (error) {
        // Handle validation errors or other errors
        throw error;
    }
}

export async function getUnitById(unitId) {
    return await Units.findById(unitId);
}

export async function updateUnit(unitId, updateData) {
    return await Units.findByIdAndUpdate(unitId, updateData, { new: true });
}

export async function deleteUnit(unitId) {
    return await Units.findByIdAndDelete(unitId);
}
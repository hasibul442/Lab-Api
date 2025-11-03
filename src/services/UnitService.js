import Units from "../models/Units.js";

export async function getAllUnits(req)  {
    const unitData = await Units.find();
    return unitData;
}

export async function storeUnit(reqData) {
    const newUnit = new Units(data);
    const savedUnit = await newUnit.save();
    return savedUnit;
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
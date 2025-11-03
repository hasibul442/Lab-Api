import { deleteUnit, getAllUnits, storeUnit, updateUnit } from "../services/UnitService.js";

export async function getUnitData(req, res, next) {
    try {
        const units = await getAllUnits(req);
        res.status(200).json({
            success: true,
            message: "Unit data fetched successfully",
            data: units
        });
    } catch (error) {
        next(error);
    }
}

export async function createUnit(req, res, next) {
    try {
        const unit = await storeUnit(req.body);
        res.status(200).json({
            success: true,
            message: "Unit created successfully",
            data: unit
        });
    } catch (error) {
        next(error);    
    }
}

export async function getUnit(req, res, next) {
    try {
        const unit = await getUnitById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Unit fetched successfully",
            data: unit
        });
    } catch (error) {
        next(error);
    }
}

export async function updateUnitData(req, res, next) {
    try {
        const updatedUnit = await updateUnit(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Unit updated successfully",
            data: updatedUnit
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteUnitData(req, res, next) {
    try {
        await deleteUnit(req.params.id);
        res.status(200).json({
            success: true,
            message: "Unit deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}
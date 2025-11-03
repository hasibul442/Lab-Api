import Doctor_Specialties from "../models/Doctor_specialties.js";

export async function getSpecialties(req, res, next) {
    try {
        const specialties = await Doctor_Specialties.find();
        res.status(200).json({
            success: true,
            message: "specialties fetched successfully",
            data: specialties
        });
    } catch (error) {
        next(error);
    }
}

export async function createSpecialty(req, res, next) {
    try {
        const newSpecialty = new Doctor_Specialties(req.body);
        const savedSpecialty = await newSpecialty.save();
        res.status(201).json({
            success: true,
            message: "Specialty created successfully",
            data: savedSpecialty
        });
    } catch (error) {
        next(error);
    }
}

export async function getSpecialty(req, res, next) {
    try {
        const specialtyId = req.params.id;
        const specialty = await Doctor_Specialties.findById(specialtyId);
        if (!specialty) {
            return res.status(404).json({
                success: false,
                message: "Specialty not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Specialty fetched successfully",
            data: specialty
        });
    } catch (error) {
        next(error);
    }
}

export async function updateSpecialtyData(req, res, next) {
    try {
        const specialtyId = req.params.id;
        const updatedSpecialty = await Doctor_Specialties.findByIdAndUpdate(specialtyId, req.body, { new: true });
        if (!updatedSpecialty) {
            return res.status(404).json({
                success: false,
                message: "Specialty not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Specialty updated successfully",
            data: updatedSpecialty
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteSpecialtyData(req, res, next) {
    try {
        const specialtyId = req.params.id;
        const deletedSpecialty = await Doctor_Specialties.findByIdAndDelete(specialtyId);
        if (!deletedSpecialty) {
            return res.status(404).json({
                success: false,
                message: "Specialty not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Specialty deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}
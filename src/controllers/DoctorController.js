import { getDoctorList, storeDoctor } from "../services/DoctorService.js";

export async function getDoctors(req, res, next) {
    try {
        const doctors = await getDoctorList(req);
        res.status(200).json({
            success: true,
            message: "Doctor data fetched successfully",
            data: doctors
        });
    } catch (error) {
        next(error);
    }
}

export async function createDoctor(req, res, next) {
    try {
        const doctor = await storeDoctor(req.body);
        res.status(200).json({
            success: true,
            message: "Doctor created successfully",
            data: doctor
        });
    } catch (error) {
        next(error);
    }
}
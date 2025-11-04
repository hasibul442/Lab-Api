import Education from "../models/Education.js";

export async function getEducation(req, res, next) {
    try {
        const searchParams = req.query;
        const page = Number.parseInt(searchParams.page) || 1;
        const limit = Number.parseInt(searchParams.limit) || 10;
        const skip = (page - 1) * limit;

        const [educationData, total] = await Promise.all([
            Education.find()
                .sort({ name: 1 })
                .skip(skip)
                .limit(limit),
            Education.countDocuments(),
        ]);

        const response = {
            data: educationData,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };

        res.status(200).json({
            success: true,
            message: "Education data fetched successfully",
            ...response,
        });
    } catch (error) {
        next(error);
    }
}

export async function createEducation(req, res, next) {
    try {
        const newEducation = new Education(req.body);
        const savedEducation = await newEducation.save();
        res.status(201).json({
            success: true,
            message: "Education created successfully",
            data: savedEducation,
        });
    } catch (error) {
        next(error);
    }
}

export async function getEducationById(req, res, next) {
    try {
        const educationId = req.params.id;
        const education = await Education.findById(educationId);
        if (!education) {
            return res.status(404).json({
                success: false,
                message: "Education not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Education fetched successfully",
            data: education,
        });
    } catch (error) {
        next(error);
    }
}

export async function updateEducation(req, res, next) {
    try {
        const educationId = req.params.id;
        const updatedEducation = await Education.findByIdAndUpdate(educationId, req.body, { new: true });
        if (!updatedEducation) {
            return res.status(404).json({
                success: false,
                message: "Education not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Education updated successfully",
            data: updatedEducation,
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteEducation(req, res, next) {
    try {
        const educationId = req.params.id;
        const deletedEducation = await Education.findByIdAndDelete(educationId);
        if (!deletedEducation) {
            return res.status(404).json({
                success: false,
                message: "Education not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Education deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}

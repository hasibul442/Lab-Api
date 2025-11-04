import Doctor_Specialties from "../models/Doctor_Specialties.js";

export async function getSpecialties(req, res, next) {
  try {
    const searchParams = req.query;
    const page = Number.parseInt(searchParams.page) || 1;
    const limit = Number.parseInt(searchParams.limit) || 10;
    const skip = (page - 1) * limit;
    const searchText = searchParams.search || "";

    const [specialties, total] = await Promise.all([
      Doctor_Specialties.find({ name: { $regex: searchText, $options: 'i' } })
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit),
      Doctor_Specialties.countDocuments({ name: { $regex: searchText, $options: 'i' } }),
    ]);
    const response = {
      data: specialties,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
    res.status(200).json({
      success: true,
      message: "Specialties fetched successfully",
      ...response,
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
      data: savedSpecialty,
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
        message: "Specialty not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Specialty fetched successfully",
      data: specialty,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateSpecialtyData(req, res, next) {
  try {
    const specialtyId = req.params.id;
    const updatedSpecialty = await Doctor_Specialties.findByIdAndUpdate(
      specialtyId,
      req.body,
      { new: true }
    );
    if (!updatedSpecialty) {
      return res.status(404).json({
        success: false,
        message: "Specialty not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Specialty updated successfully",
      data: updatedSpecialty,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteSpecialtyData(req, res, next) {
  try {
    const specialtyId = req.params.id;
    const deletedSpecialty = await Doctor_Specialties.findByIdAndDelete(
      specialtyId
    );
    if (!deletedSpecialty) {
      return res.status(404).json({
        success: false,
        message: "Specialty not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}

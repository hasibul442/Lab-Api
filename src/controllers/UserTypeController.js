import UserType from "../models/UserType.js";
import { handleErrorResponse } from "../utils/helper/ErrorResponseHandle.js";

export async function getUserTypes(req, res) {
  try {
    const userTypes = await UserType.find();
    res.status(200).json({
      data: userTypes,
      success: true,
      message: "User types fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}

export async function createUserType(req, res) {
  try {
    const { name, description } = req.body;
    const newUserType = new UserType({ name, description });
    await newUserType.save();
    res.status(200).json({
      data: newUserType,
      success: true,
      message: "User type created successfully",
    });
  } catch (error) {
    res.status(500).json(handleErrorResponse(error));
  }
}

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

export async function getUserTypeById(req, res) {
  try {
    const { id } = req.params;
    const userType = await UserType.findById(id);
    if (!userType) {
      return res.status(404).json({
        success: false,
        message: "User type not found",
      });
    }
    res.status(200).json({
      data: userType,
      success: true,
      message: "User type fetched successfully",
    });
  } catch (error) {
    res.status(500).json(handleErrorResponse(error));
  }
}

export async function updateUserType(req, res) {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedUserType = await UserType.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!updatedUserType) {
      return res.status(404).json({
        success: false,
        message: "User type not found",
      });
    }
    res.status(200).json({
      data: updatedUserType,
      success: true,
      message: "User type updated successfully",
    });
  } catch (error) {
    res.status(500).json(handleErrorResponse(error));
  }
}

export async function deleteUserType(req, res) {
  try {
    const { id } = req.params;
    const deletedUserType = await UserType.findByIdAndDelete(id);
    if (!deletedUserType) {
      return res.status(404).json({
        success: false,
        message: "User type not found",
      });
    }
    res.status(200).json({
      data: deletedUserType,
      success: true,
      message: "User type deleted successfully",
    });
  } catch (error) {
    res.status(500).json(handleErrorResponse(error));
  }
} 
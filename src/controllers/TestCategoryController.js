import { deleteCategory, getAllCategory, getCategoryById, storeCategory, updateCategory } from "../services/TestCategoryService.js";

export async function getTestCategoryList(req, res) {
    try {
        const categories = await getAllCategory(req);
        res.status(200).json({
            ...categories,
            success: true,
            message: "Test categories fetched successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching test categories", error });
    }
}

export async function createTestCategory(req, res) {
    try {
        const newCategory = await storeCategory(req.body);
        res.status(201).json({
            success: true,
            message: "Test category created successfully",
            data: newCategory
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating test category", error });
    }
}

export async function getTestCategory(req, res) {
    try {
        const categoryId = req.params.id;
        const category = await getCategoryById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Test category not found" });
        }
        res.status(200).json({
            success: true,
            message: "Test category fetched successfully",
            data: category
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching test category", error });
    }
}

export async function updateTestCategory(req, res) {
    try {
        const categoryId = req.params.id;
        const updatedCategory = await updateCategory(categoryId, req.body);
        if (!updatedCategory) {
            return res.status(404).json({ message: "Test category not found" });
        }
        res.status(200).json({
            success: true,
            message: "Test category updated successfully",
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating test category", error });
    }
}

export async function deleteTestCategory(req, res) {
    try {
        const categoryId = req.params.id;
        const deletedCategory = await deleteCategory(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Test category not found" });
        }
        res.status(200).json({
            success: true,
            message: "Test category deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting test category", error });
    }
}
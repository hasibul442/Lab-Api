import TestCategory from "../models/TestCategory.js";

export async function getAllCategory(req) {
  const searchParams = req.query;
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 10;
  const skip = (page - 1) * limit;
  const searchText = searchParams.get("search") || "";

  const [categories, total] = await Promise.all([
    TestCategory.find({ name: { $regex: searchText, $options: 'i' } })
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit),
        TestCategory.countDocuments({ name: { $regex: searchText, $options: 'i' } }),
  ]);
  const response = {
    data: categories,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
  return response;
}

export async function storeCategory(reqData) {
  const newCategory = new TestCategory(reqData);
  const savedCategory = await newCategory.save();
  return savedCategory;
}

export async function getCategoryById(categoryId) {
  return await TestCategory.findById(categoryId);
}

export async function updateCategory(categoryId, updateData) {
    return await TestCategory.findByIdAndUpdate(categoryId, updateData, { new: true });
}

export async function deleteCategory(categoryId) {
    return await TestCategory.findByIdAndDelete(categoryId);
} 
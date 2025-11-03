import Tests from "../models/Tests.js";

export async function getAllTests(req) {
  const searchParams = req.query;
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 10;
  const skip = (page - 1) * limit;
  const searchText = searchParams.get("search") || "";

  const [testData, total] = await Promise.all([
    Tests.find({ name: { $regex: searchText, $options: "i" } })
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit)
      .populate("category", "name")
      .populate("unit_id", "name"),
    Tests.countDocuments({ name: { $regex: searchText, $options: "i" } }),
  ]);
  const response = {
    data: testData,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
  return response;
}

export async function storeTest(reqData) {
  const newTest = new Tests(reqData);
  const savedTest = await newTest.save();
  return savedTest;
}

export async function getTestById(testId) {
  return await Tests.findById(testId)
    .populate("category", "name")
    .populate("unit_id", "name");
}

export async function updateTest(testId, updateData) {
    return await Tests.findByIdAndUpdate(testId, updateData, { new: true });
}

export async function deleteTest(testId) {
    return await Tests.findByIdAndDelete(testId);
}
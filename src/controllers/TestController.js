import { deleteTest, getAllTests, getTestById, storeTest, updateTest } from "../services/TestService.js";

export async function getTestList(req, res) {
    try {
        const tests = await getAllTests(req);
        res.status(200).json({
            ...tests,
            success: true,
            message: "Test data fetched successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching tests", error });
    }
}


export async function createTest(req, res) {
    try {
        const newTest = await storeTest(req.body);
        res.status(201).json({
            success: true,
            message: "Test created successfully",
            data: newTest
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating test", error });
    }
}

export async function getTest(req, res) {
    try {
        const testId = req.params.id;
        const test = await getTestById(testId);
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json({
            success: true,
            message: "Test fetched successfully",
            data: test
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching test", error });
    }
}

export async function updateTestData(req, res) {
    try {
        const testId = req.params.id;
        const updatedTest = await updateTest(testId, req.body);
        if (!updatedTest) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json({
            success: true,
            message: "Test updated successfully",
            data: updatedTest
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating test", error });
    }
}

export async function deleteTestData(req, res) {
    try {
        const testId = req.params.id;
        const deletedTest = await deleteTest(testId);
        if (!deletedTest) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json({
            success: true,
            message: "Test deleted successfully",
            data: deletedTest
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting test", error });
    }
}

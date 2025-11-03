import { getAllTests } from "../services/TestService";

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


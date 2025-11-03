import Tests from "../models/Tests.js";
import Units from "../models/Units.js";
import User from "../models/User.js";
import Doctors from "../models/Doctors.js";

export async function homeData(req, res, next) {
  try {
    const totalTestItems = await Tests.countDocuments();
    const totalUnits = await Units.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalDoctors = await Doctors.countDocuments();
    res.status(200).json({
      success: true,
      message: "success",
      data: {
        total_test_items: totalTestItems,
        units: totalUnits,
        users: totalUsers,
        doctors: totalDoctors,
      },
    });
  } catch (error) {
    next(error);
  }
}

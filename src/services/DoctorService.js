import Doctors from "../models/Doctors.js";

export async function getDoctorList(req)  {
    const doctorData = await Doctors.find();
    return doctorData;
}

export async function storeDoctor(reqData) {
    const newDoctor = new Doctors(reqData);
    const savedDoctor = await newDoctor.save();
    return savedDoctor;
}

export async function getDoctorById(doctorId) {
    return await Doctors.findById(doctorId);
}

export async function updateDoctor(doctorId, updateData) {
    return await Doctors.findByIdAndUpdate(doctorId, updateData, { new: true });
}

export async function deleteDoctor(doctorId) {
    return await Doctors.findByIdAndDelete(doctorId);
}
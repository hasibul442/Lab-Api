import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"],
        unique: true,
    },
    description: { 
        type: String
    },
    logo: {
        type: String,
        required: [true, "Logo is required"],
    }
});

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;

import mongoose from 'mongoose';

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { 
        type: String, 
        required: [ true, 'Email is required' ],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'] 
    },
    status: {
        type: Boolean,
        required: [true, 'Status is required'],
        default: true
    },

}, {
    timestamps: true
});

const Units = mongoose.models.Units || mongoose.model('Units', unitSchema);

export default Units;

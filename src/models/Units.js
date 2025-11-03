import mongoose from 'mongoose';

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    status: {
        type: Boolean,
        required: [true, 'Status is required'],
        default: true
    },

}, {
    timestamps: true // This automatically adds createdAt and updatedAt fields
});

const Units = mongoose.models.Units || mongoose.model('Units', unitSchema);

export default Units;

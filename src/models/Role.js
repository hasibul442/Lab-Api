import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Role name is required'],
    unique: true,
    trim: true
  },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: "Unit" },
  permissions: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }],
    required: [true, 'Permissions are required'],
    // validate: {
    //   validator: function (v) {
    //     return v && v.length > 0;
    //   },
    //   message: 'At least one permission must be specified'
    // }
  },
  status: {
    type: Boolean,
    required: [true, 'Status is required'],
    default: true
  }
}, {
  timestamps: true // This automatically adds createdAt and updatedAt fields
});

const Role = mongoose.models.Role || mongoose.model('Role', roleSchema);

export default Role;

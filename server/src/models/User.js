import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: true,
  },
  accounts: [{
    type: Schema.Types.ObjectId,
    ref: 'Account',
  }],
}, {
  timestamps: true,
});

export default model('User', UserSchema);

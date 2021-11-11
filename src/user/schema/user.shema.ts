import { Schema } from 'mongoose';

export const userSchema = new Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
  },
  { timestamps: true },
);

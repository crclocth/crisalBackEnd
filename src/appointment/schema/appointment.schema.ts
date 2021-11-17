import { Schema } from 'mongoose';

export const appointmentSchema = new Schema(
  {
    name: { type: String, required: true },
    rut: { type: String, required: true },
    email: { type: String, required: false },
    battery: { type: String, required: true },
    date: { type: Date, required: false },
    age: { type: Number, required: true },
    jobTitle: { type: String, required: false },
  },
  { timestamps: true },
);

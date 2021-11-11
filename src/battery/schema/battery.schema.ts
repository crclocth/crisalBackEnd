import { Schema } from 'mongoose';

export const batterySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    generalExams: { type: Array, required: false },
    labExams: { type: Array, required: false },
  },
  { timestamps: true },
);

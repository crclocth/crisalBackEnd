import { Schema } from 'mongoose';

export const examSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    laboratory: { type: String, required: false },
    measurementUnit: { type: String, required: false },
  },
  { timestamps: true },
);

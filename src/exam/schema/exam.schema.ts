import { Schema } from 'mongoose';

export const examSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    laboratory: { type: String, required: true },
    measurementUnit: { type: String, required: true },
  },
  { timestamps: true },
);

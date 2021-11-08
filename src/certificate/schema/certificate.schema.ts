import { Schema } from 'mongoose';

export const certificateSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    conclusion: { type: String, required: true },
    suggestions: { type: String, required: true },
    validity: { type: String, required: true },
    validityDate: { type: String, required: true },
    doctor: { type: String, required: true },
  },
  { timestamps: true },
);

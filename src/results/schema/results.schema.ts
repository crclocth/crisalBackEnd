import { Schema } from 'mongoose';

export const resultsSchema = new Schema(
  {
    exam: { type: String, required: true },
    laboratory: { type: String, required: false },
    measurementUnit: { type: String, required: false },
    status: { type: String, required: true },
    remark: { type: String, required: false },
    result: { type: Number, required: false },
  },
  { timestamps: true },
);

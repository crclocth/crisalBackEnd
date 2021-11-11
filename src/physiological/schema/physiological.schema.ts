import { Schema } from 'mongoose';

export const physiologicalSchema = new Schema(
  {
    heartRate: { type: Number, required: true },
    bloodPressure: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    imc: { type: Number, required: true },
    sat: { type: Number, required: true },
  },
  { timestamps: true },
);

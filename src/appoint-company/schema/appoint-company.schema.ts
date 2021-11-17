import { Schema } from 'mongoose';

export const appointCompanySchema = new Schema(
  {
    name: { type: String, required: true },
    rut: { type: String, required: true },
    faena: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    examinees: { type: Array, required: true },
  },
  { timestamps: true },
);

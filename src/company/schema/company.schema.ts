import { Schema } from 'mongoose';

export const companySchema = new Schema(
  {
    rut: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    faena: { type: String, required: true },
  },
  { timestamps: true },
);

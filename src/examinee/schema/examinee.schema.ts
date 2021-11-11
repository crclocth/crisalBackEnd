import { Schema } from 'mongoose';

export const examineeSchema = new Schema(
  {
    rut: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    jobTitle: { type: String, required: true },
  },
  { timestamps: true },
);

import { Schema } from 'mongoose';

export const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    rut: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

import { Schema } from 'mongoose';

export const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

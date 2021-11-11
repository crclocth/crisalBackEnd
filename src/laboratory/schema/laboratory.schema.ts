import { Schema } from 'mongoose';

export const laboratorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

import { Schema } from 'mongoose';

export const clientSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

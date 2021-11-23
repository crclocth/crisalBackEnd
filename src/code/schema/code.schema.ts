import { Schema } from 'mongoose';

export const codeSchema = new Schema(
  {
    serial: { type: Number, required: true },
  },
  { timestamps: true },
);

import { Schema } from 'mongoose';

export const newSchema = new Schema(
  {
    title: { type: String, required: true },
    lead: { type: String, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

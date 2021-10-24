import { Schema } from 'mongoose';

export const informationSchema = new Schema(
  {
    telephone1: { type: Number, required: true },
    telephone2: { type: Number, required: true },
    address: { type: String, required: true },
    mail: { type: String, required: true },
    aboutUs: { type: String, required: true },
    vision: { type: String, required: true },
    mission: { type: String, required: true },
    values: { type: String, required: true },
  },
  { timestamps: true },
);

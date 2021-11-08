import { Schema } from 'mongoose';

export const resultsSchema = new Schema(
  {
    status: { type: String, required: true },
    remark: { type: String, required: true },
    result: { type: Number, required: true },    
  },
  { timestamps: true },
);

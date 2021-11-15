import { Schema } from 'mongoose';

export const certificateSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    conclusion: { type: String, required: true },
    suggestions: { type: String, required: true },
    validity: { type: String, required: true },
    validityDate: { type: String, required: true },
    doctor: { type: String, required: true },
    company: { type: Object, required: true },
    examinee: { type: Object, required: true },
    generalResults: { type: Array, required: false },
    labResults: { type: Array, required: false },
    physiological: { type: Object, required: true },

    /* company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: false,
      autopopulate: { maxDepth: 2 },
    }, */
  },
  { timestamps: true },
);
certificateSchema.plugin(require('mongoose-autopopulate'));

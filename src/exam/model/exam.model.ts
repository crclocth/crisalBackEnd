import { Document } from 'mongoose';

export interface Exam extends Document {
  readonly name: string;
  readonly type: string;
  readonly laboratory: string;
  readonly measurementUnit: string;
}

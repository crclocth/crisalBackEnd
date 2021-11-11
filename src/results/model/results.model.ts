import { Document } from 'mongoose';

export interface Results extends Document {
  readonly exam: string;
  readonly laboratory: string;
  readonly measurementUnit: string;
  readonly status: string;
  readonly remark: string;
  readonly result: number;
}

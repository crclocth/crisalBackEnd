import { Document } from 'mongoose';

export interface Results extends Document {
  readonly status: string;
  readonly remark: string;
  readonly result: number;  
}

import { Document } from 'mongoose';

export interface Code extends Document {
  readonly serial: number;
}

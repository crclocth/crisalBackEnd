import { Document } from 'mongoose';

export interface Laboratory extends Document {
  readonly name: string;
}

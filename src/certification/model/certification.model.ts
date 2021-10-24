import { Document } from 'mongoose';

export interface Certification extends Document {
  readonly title: string;
  readonly imagen: string;
}

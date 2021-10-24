import { Document } from 'mongoose';

export interface Client extends Document {
  readonly title: string;
  readonly image: string;
}

import { Document } from 'mongoose';

export interface New extends Document {
  readonly title: string;
  readonly lead: string;
  readonly content: string;
  readonly image: string;
}

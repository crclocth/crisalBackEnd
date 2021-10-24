import { Document } from 'mongoose';

export interface New extends Document {
  readonly title: string;
  readonly lead: string;
  readonly date: string;
  readonly content: string;
  readonly image: string;
}

import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly name: string;
  readonly profession: string;
  readonly abreprofession: string;
  readonly image: string;
  readonly description: string;
}

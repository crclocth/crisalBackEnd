import { Document } from 'mongoose';

export interface Examinee extends Document {
  readonly rut: string;
  readonly name: string;
  readonly age: number;
  readonly jobTitle: string;
}

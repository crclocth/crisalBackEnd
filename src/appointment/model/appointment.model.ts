import { Document } from 'mongoose';

export interface Appointment extends Document {
  readonly name: string;
  readonly rut: string;
  readonly email?: string;
  readonly battery: string;
  readonly date?: Date;
  readonly age: number;
  readonly jobTitle?: string;
}

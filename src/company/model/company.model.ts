import { Document } from 'mongoose';

export interface Company extends Document {
  readonly rut: string;
  readonly name: string;
  readonly email: string;
  readonly faena: string;
}

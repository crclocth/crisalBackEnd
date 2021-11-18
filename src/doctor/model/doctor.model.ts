import { Document } from 'mongoose';

export interface Doctor extends Document {
  readonly name: string;
  readonly rut: string;
  readonly title: string;
  readonly image: string;
}

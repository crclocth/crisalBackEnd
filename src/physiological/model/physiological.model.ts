import { Document } from 'mongoose';

export interface Physiological extends Document {
  readonly heartRate: number;
  readonly bloodPressure: string;
  readonly weight: number;
  readonly height: number;
  readonly imc: number;
  readonly sat: number;
}
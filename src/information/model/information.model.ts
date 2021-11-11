import { Document } from 'mongoose';

export interface Information extends Document {
  readonly telephone1: number;
  readonly telephone2: number;
  readonly address: string;
  readonly mail: string;
  readonly aboutUs: string;
  readonly vision: string;
  readonly mission: string;
  readonly values: string;
}

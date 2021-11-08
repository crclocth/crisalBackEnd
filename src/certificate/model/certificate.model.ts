import { Document } from 'mongoose';

export interface Certificate extends Document {
  readonly title: string;
  readonly date: string;
  readonly conclusion: string;
  readonly suggestions: string;
  readonly validity: string;
  readonly validityDate: string;
  readonly doctor: string; 
}

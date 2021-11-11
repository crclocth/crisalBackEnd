import { Document } from 'mongoose';

export interface Battery extends Document {
  readonly name: string;
  readonly description: string;
  readonly generalExams: string[];
  readonly labExams: string[];
}

import { Document } from 'mongoose';

export interface Contact extends Document {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

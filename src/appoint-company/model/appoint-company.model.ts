import { Document } from 'mongoose';
import { Appointment } from 'src/appointment/model/appointment.model';

export interface AppointCompany extends Document {
  readonly name: string;
  readonly rut: string;
  readonly faena: string;
  readonly email: string;
  readonly date: Date;
  readonly examinees: Appointment[];
}

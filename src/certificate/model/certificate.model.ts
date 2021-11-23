import { Document } from 'mongoose';
import { Company } from 'src/company/model/company.model';
import { Doctor } from 'src/doctor/model/doctor.model';
import { Examinee } from 'src/examinee/model/examinee.model';
import { Physiological } from 'src/physiological/model/physiological.model';
import { Results } from 'src/results/model/results.model';

export interface Certificate extends Document {
  readonly title: string;
  readonly date: Date;
  readonly examinee: Examinee;
  readonly company: Company;
  readonly physiological: Physiological;
  readonly generalResults?: Results[];
  readonly labResults?: Results[];
  readonly conclusion: string;
  readonly suggestions: string;
  readonly validity: string;
  readonly serialCode: number;
  readonly validityDate: string;
  readonly doctor: Doctor;
}

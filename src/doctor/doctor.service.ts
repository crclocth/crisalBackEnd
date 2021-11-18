import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDTO, UpdateDoctorDTO } from './dto/doctor.dto';
import { Doctor } from './model/doctor.model';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel('Doctor')
    private readonly doctorModel: Model<Doctor>,
  ) {}

  async createDoctor(createDoctorDTO: CreateDoctorDTO): Promise<Doctor> {
    const newCompany = new this.doctorModel(createDoctorDTO);
    return newCompany.save();
  }

  async getDoctors(): Promise<Doctor[]> {
    const companies = await this.doctorModel.find();
    return companies;
  }

  async getDoctor(id: string): Promise<Doctor> {
    const company = await this.doctorModel.findById(id);
    return company;
  }

  async deleteDoctor(id: string): Promise<any> {
    const company = await this.doctorModel.findByIdAndDelete(id);
    return company;
  }

  async updateDoctor(
    id: string,
    updateDoctorDTO: UpdateDoctorDTO,
  ): Promise<Doctor> {
    const updatedDoctor = await this.doctorModel
      .findByIdAndUpdate(id, { $set: updateDoctorDTO }, { new: true })
      .exec();
    return updatedDoctor;
  }
}

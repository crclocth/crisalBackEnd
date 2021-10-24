import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateCertificationDTO,
  UpdateCertificationDTO,
} from './dto/certification.dto';
import { Certification } from './model/certification.model';

@Injectable()
export class CertificationService {
  constructor(
    @InjectModel('Certification')
    private readonly certificationModel: Model<Certification>,
  ) {}

  async createCertification(
    createCertificationDTO: CreateCertificationDTO,
  ): Promise<Certification> {
    const newCertification = new this.certificationModel(
      createCertificationDTO,
    );
    return newCertification.save();
  }

  async getCertifications(): Promise<Certification[]> {
    const certifications = await this.certificationModel.find();
    return certifications;
  }

  async getCertification(id: string): Promise<Certification> {
    const certification = await this.certificationModel.findById(id);
    return certification;
  }

  async deleteCertification(id: string): Promise<any> {
    const certification = await this.certificationModel.findByIdAndDelete(id);
    return certification;
  }

  async updateCertification(
    id: string,
    updateCertificationDTO: UpdateCertificationDTO,
  ): Promise<Certification> {
    const updatedCertification = await this.certificationModel
      .findByIdAndUpdate(id, { $set: updateCertificationDTO }, { new: true })
      .exec();
    return updatedCertification;
  }
}

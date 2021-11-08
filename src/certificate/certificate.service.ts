import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCertificateDTO, UpdateCertificateDTO } from './dto/certificate.dto';
import { Certificate } from './model/certificate.model';

@Injectable()
export class CertificateService {
    constructor(
        @InjectModel('Certificate')
        private readonly certificateModel: Model<Certificate>,
      ) {}
    
      async createCertificate(createCertificateDTO: CreateCertificateDTO): Promise<Certificate> {
        const newCertificate = new this.certificateModel(createCertificateDTO);
        return newCertificate.save();
      }
    
      async getCertificates(): Promise<Certificate[]> {
        const certificates = await this.certificateModel.find();
        return certificates;
      }
    
      async getCertificate(id: string): Promise<Certificate> {
        const certificate = await this.certificateModel.findById(id);
        return certificate;
      }
    
      async deleteCertificate(id: string): Promise<any> {
        const certificate = await this.certificateModel.findByIdAndDelete(id);
        return certificate;
      }
    
      async updateCertificate(
        id: string,
        updateCertificateDTO: UpdateCertificateDTO,
      ): Promise<Certificate> {
        const updatedCertificate = await this.certificateModel
          .findByIdAndUpdate(id, { $set: updateCertificateDTO }, { new: true })
          .exec();
        return updatedCertificate;
      }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLaboratoryDTO, UpdateLaboratoryDTO } from './dto/laboratory.dto';
import { Laboratory } from './model/laboratory.model';

@Injectable()
export class LaboratoryService {
  constructor(
    @InjectModel('Information')
    private readonly laboratoryModel: Model<Laboratory>,
  ) {}

  async createLaboratory(
    createLaboratoryDTO: CreateLaboratoryDTO,
  ): Promise<Laboratory> {
    const newLaboratory = new this.laboratoryModel(createLaboratoryDTO);
    return newLaboratory.save();
  }

  async getLaboratorys(): Promise<Laboratory[]> {
    const laboratory = await this.laboratoryModel.find();
    return laboratory;
  }

  async getLaboratory(id: string): Promise<Laboratory> {
    const laboratory = await this.laboratoryModel.findById(id);
    return laboratory;
  }

  async deleteLaboratory(id: string): Promise<any> {
    const laboratory = await this.laboratoryModel.findByIdAndDelete(id);
    return laboratory;
  }

  async updateLaboratory(
    id: string,
    updateLaboratoryDTO: UpdateLaboratoryDTO,
  ): Promise<Laboratory> {
    const updatedLaboratory = await this.laboratoryModel
      .findByIdAndUpdate(id, { $set: updateLaboratoryDTO }, { new: true })
      .exec();
    return updatedLaboratory;
  }
}

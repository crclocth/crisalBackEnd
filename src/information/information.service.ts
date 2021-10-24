import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateInformationDTO,
  UpdateInformationDTO,
} from './dto/information.dto';
import { Information } from './model/information.model';

@Injectable()
export class InformationService {
  constructor(
    @InjectModel('Information')
    private readonly informationModel: Model<Information>,
  ) {}

  async createInformation(
    createInformationDTO: CreateInformationDTO,
  ): Promise<Information> {
    const newInformation = new this.informationModel(createInformationDTO);
    return newInformation.save();
  }

  async getInformations(): Promise<Information[]> {
    const information = await this.informationModel.find();
    return information;
  }

  async getInformation(id: string): Promise<Information> {
    const information = await this.informationModel.findById(id);
    return information;
  }

  async deleteInformation(id: string): Promise<any> {
    const information = await this.informationModel.findByIdAndDelete(id);
    return information;
  }

  async updateInformation(
    id: string,
    updateInformationDTO: UpdateInformationDTO,
  ): Promise<Information> {
    const updatedInformation = await this.informationModel
      .findByIdAndUpdate(id, { $set: updateInformationDTO }, { new: true })
      .exec();
    return updatedInformation;
  }
}

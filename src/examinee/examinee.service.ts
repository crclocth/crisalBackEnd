import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExamineeDTO, UpdateExamineeDTO } from './dto/examinee.dto';
import { Examinee } from './model/examinee.model';

@Injectable()
export class ExamineeService {
    constructor(
        @InjectModel('Examinee')
        private readonly examineeModel: Model<Examinee>,
      ) {}
    
      async createExaminee(createExamineeDTO: CreateExamineeDTO): Promise<Examinee> {
        const newExaminee = new this.examineeModel(createExamineeDTO);
        return newExaminee.save();
      }
    
      async getExaminees(): Promise<Examinee[]> {
        const examinees = await this.examineeModel.find();
        return examinees;
      }
    
      async getExaminee(id: string): Promise<Examinee> {
        const examinee = await this.examineeModel.findById(id);
        return examinee;
      }
    
      async deleteExaminee(id: string): Promise<any> {
        const examinee = await this.examineeModel.findByIdAndDelete(id);
        return examinee;
      }
    
      async updateExaminee(
        id: string,
        updateExamineeDTO: UpdateExamineeDTO,
      ): Promise<Examinee> {
        const updatedExaminee = await this.examineeModel
          .findByIdAndUpdate(id, { $set: updateExamineeDTO }, { new: true })
          .exec();
        return updatedExaminee;
      }
}

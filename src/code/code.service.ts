import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCodeDTO, UpdateCodeDTO } from './dto/code.dto';
import { Code } from './model/code.model';

@Injectable()
export class CodeService {
  constructor(@InjectModel('Code') private readonly codeModel: Model<Code>) {}

  async createCode(createCodeDTO: CreateCodeDTO): Promise<Code> {
    const newEmployee = new this.codeModel(createCodeDTO);
    return newEmployee.save();
  }

  async getCodes(): Promise<Code[]> {
    const employees = await this.codeModel.find();
    return employees;
  }

  async getCode(id: string): Promise<Code> {
    const employee = await this.codeModel.findById(id);
    return employee;
  }

  async deleteCode(id: string): Promise<any> {
    const employee = await this.codeModel.findByIdAndDelete(id);
    return employee;
  }

  async updateCode(id: string, updateCodeDTO: UpdateCodeDTO): Promise<Code> {
    const updatedEmployee = await this.codeModel
      .findByIdAndUpdate(id, { $set: updateCodeDTO }, { new: true })
      .exec();
    return updatedEmployee;
  }
}

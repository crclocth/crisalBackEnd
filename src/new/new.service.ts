import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewDTO, UpdateNewDTO } from './dto/new.dto';
import { New } from './model/new.model';

@Injectable()
export class NewService {
  constructor(
    @InjectModel('New')
    private readonly newModel: Model<New>,
  ) {}

  async createNew(createNewDTO: CreateNewDTO): Promise<New> {
    const newNew = new this.newModel(createNewDTO);
    return newNew.save();
  }

  async getNews(): Promise<New[]> {
    const news = await this.newModel.find();
    return news;
  }

  async getNew(id: string): Promise<New> {
    const note = await this.newModel.findById(id);
    return note;
  }

  async deleteNew(id: string): Promise<any> {
    const note = await this.newModel.findByIdAndDelete(id);
    return note;
  }

  async updateNew(id: string, updateNewDTO: UpdateNewDTO): Promise<New> {
    const updatedNew = await this.newModel
      .findByIdAndUpdate(id, { $set: updateNewDTO }, { new: true })
      .exec();
    return updatedNew;
  }
}

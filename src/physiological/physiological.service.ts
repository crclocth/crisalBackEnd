import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePhysiologicalDTO, UpdatePhysiologicalDTO } from './dto/physiological.dto';
import { Physiological } from './model/physiological.model';

@Injectable()
export class PhysiologicalService {
    constructor(
        @InjectModel('Physiological')
        private readonly physiologicalModel: Model<Physiological>,
      ) {}
    
      async createPhysiological(createPhysiologicalDTO: CreatePhysiologicalDTO): Promise<Physiological> {
        const newPhysiological = new this.physiologicalModel(createPhysiologicalDTO);
        return newPhysiological.save();
      }
    
      async getPhysiologicals(): Promise<Physiological[]> {
        const physiologicals = await this.physiologicalModel.find();
        return physiologicals;
      }
    
      async getPhysiological(id: string): Promise<Physiological> {
        const physiological = await this.physiologicalModel.findById(id);
        return physiological;
      }
    
      async deletePhysiological(id: string): Promise<any> {
        const physiological = await this.physiologicalModel.findByIdAndDelete(id);
        return physiological;
      }
    
      async updatePhysiological(
        id: string,
        updatePhysiologicalDTO: UpdatePhysiologicalDTO,
      ): Promise<Physiological> {
        const updatedPhysiological = await this.physiologicalModel
          .findByIdAndUpdate(id, { $set: updatePhysiologicalDTO }, { new: true })
          .exec();
        return updatedPhysiological;
      }
}

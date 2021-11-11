import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResultsDTO, UpdateResultsDTO } from './dto/results.dto';
import { Results } from './model/results.model';

@Injectable()
export class ResultsService {
    constructor(
        @InjectModel('Results')
        private readonly resultsModel: Model<Results>,
      ) {}
    
      async createResults(createResultsDTO: CreateResultsDTO): Promise<Results> {
        const newResults = new this.resultsModel(createResultsDTO);
        return newResults.save();
      }
    
      async getListOfResults(): Promise<Results[]> {
        const resultsList = await this.resultsModel.find();
        return resultsList;
      }
    
      async getResults(id: string): Promise<Results> {
        const results = await this.resultsModel.findById(id);
        return results;
      }
    
      async deleteResults(id: string): Promise<any> {
        const results = await this.resultsModel.findByIdAndDelete(id);
        return results;
      }
    
      async updateResults(
        id: string,
        updateResultsDTO: UpdateResultsDTO,
      ): Promise<Results> {
        const updatedResults = await this.resultsModel
          .findByIdAndUpdate(id, { $set: updateResultsDTO }, { new: true })
          .exec();
        return updatedResults;
      }
}

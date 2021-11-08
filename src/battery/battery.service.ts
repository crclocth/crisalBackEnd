import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBatteryDTO, UpdateBatteryDTO } from './dto/battery.dto';
import { Battery } from './model/battery.model';

@Injectable()
export class BatteryService {
    constructor(
        @InjectModel('Battery')
        private readonly batteryModel: Model<Battery>,
      ) {}
    
      async createBattery(createBatteryDTO: CreateBatteryDTO): Promise<Battery> {
        const newBattery = new this.batteryModel(createBatteryDTO);
        return newBattery.save();
      }
    
      async getBatteries(): Promise<Battery[]> {
        const batteries = await this.batteryModel.find();
        return batteries;
      }
    
      async getBattery(id: string): Promise<Battery> {
        const battery = await this.batteryModel.findById(id);
        return battery;
      }
    
      async deleteBattery(id: string): Promise<any> {
        const battery = await this.batteryModel.findByIdAndDelete(id);
        return battery;
      }
    
      async updateBattery(
        id: string,
        updateBatteryDTO: UpdateBatteryDTO,
      ): Promise<Battery> {
        const updatedBattery = await this.batteryModel
          .findByIdAndUpdate(id, { $set: updateBatteryDTO }, { new: true })
          .exec();
        return updatedBattery;
      }
}

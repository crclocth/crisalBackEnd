import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BatteryController } from './battery.controller';
import { BatteryService } from './battery.service';
import { batterySchema } from './schema/battery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Battery', schema: batterySchema }]),
  ],
  controllers: [BatteryController],
  providers: [BatteryService]
})
export class BatteryModule {}

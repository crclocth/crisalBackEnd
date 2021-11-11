import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LaboratoryController } from './laboratory.controller';
import { LaboratoryService } from './laboratory.service';
import { laboratorySchema } from './schema/laboratory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Laboratory', schema: laboratorySchema },
    ]),
  ],
  controllers: [LaboratoryController],
  providers: [LaboratoryService],
})
export class LaboratoryModule {}

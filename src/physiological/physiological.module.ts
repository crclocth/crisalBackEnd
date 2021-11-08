import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhysiologicalController } from './physiological.controller';
import { PhysiologicalService } from './physiological.service';
import { physiologicalSchema } from './schema/physiological.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Physiological', schema: physiologicalSchema }]),
  ],
  controllers: [PhysiologicalController],
  providers: [PhysiologicalService]
})
export class PhysiologicalModule {}

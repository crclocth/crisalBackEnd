import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamineeController } from './examinee.controller';
import { ExamineeService } from './examinee.service';
import { examineeSchema } from './schema/examinee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Examinee', schema: examineeSchema }]),
  ],
  controllers: [ExamineeController],
  providers: [ExamineeService]
})
export class ExamineeModule {}

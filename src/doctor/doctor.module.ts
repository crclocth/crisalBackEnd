import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { doctorSchema } from './schema/doctor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Doctor', schema: doctorSchema }]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { appointmentSchema } from './schema/appointment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Appointment', schema: appointmentSchema },
    ]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}

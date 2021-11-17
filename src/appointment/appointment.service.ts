import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from './dto/appointment.dto';
import { Appointment } from './model/appointment.model';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('Appointment')
    private readonly appointmentModel: Model<Appointment>,
    private readonly sendGrid: SendGridService,
  ) {}

  async createAppointment(
    createAppointmentDTO: CreateAppointmentDTO,
  ): Promise<Appointment> {
    const newBattery = new this.appointmentModel(createAppointmentDTO);
    await this.sendGrid.send({
      to: 'crirev@gmail.com',
      from: 'crirev@gmail.com',
      cc: 'crclocth@gmail.com',
      subject: 'Solicitud Examenes Particular',
      html: `
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <div style="margin:20px">NOMBRE: ${newBattery.name}</div>
            <div style="margin:20px">RUT: ${newBattery.rut}</div>
            <div style="margin:20px">CORREO: ${newBattery.email}</div>
            <div style="margin:20px">BATERÍA SOLICITADA: ${newBattery.battery}</div>
            <div style="margin:20px">FECHA: ${newBattery.date}</div>
            <div style="margin:20px">EDAD: ${newBattery.age}</div>
          </body>
        </html>,
    `,
    });
    return newBattery.save();
  }

  async getAppointments(): Promise<Appointment[]> {
    const batteries = await this.appointmentModel.find();
    return batteries;
  }

  async getAppointment(id: string): Promise<Appointment> {
    const battery = await this.appointmentModel.findById(id);
    return battery;
  }

  async deleteAppointment(id: string): Promise<any> {
    const battery = await this.appointmentModel.findByIdAndDelete(id);
    return battery;
  }

  async updateAppointment(
    id: string,
    updateAppointmentDTO: UpdateAppointmentDTO,
  ): Promise<Appointment> {
    const updatedAppointment = await this.appointmentModel
      .findByIdAndUpdate(id, { $set: updateAppointmentDTO }, { new: true })
      .exec();
    return updatedAppointment;
  }
}

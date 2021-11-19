import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateAppointCompanyDTO,
  UpdateAppointCompanyDTO,
} from './dto/appoint-company.dto';
import { AppointCompany } from './model/appoint-company.model';

@Injectable()
export class AppointCompanyService {
  constructor(
    @InjectModel('AppointCompany')
    private readonly appointCompanyModel: Model<AppointCompany>,
    private readonly sendGrid: SendGridService,
  ) {}

  async createAppointCompany(
    createAppointCompanyDTO: CreateAppointCompanyDTO,
  ): Promise<AppointCompany> {
    const newBattery = new this.appointCompanyModel(createAppointCompanyDTO);
    const trabajadores = this.formatExaminees(newBattery);
    await this.sendGrid.send({
      to: 'crirev@gmail.com',
      from: 'crirev@gmail.com',
      cc: 'crclocth@gmail.com',
      subject: 'Solicitud Examenes Empresa',
      html: `
            <html>
              <head>
                <title></title>
              </head>
              <body>
                <div style="margin:20px">EMPRESA: ${newBattery.name}</div>
                <div style="margin:20px">RUT EMPRESA: ${newBattery.rut}</div>
                <div style="margin:20px">FAENA: ${newBattery.faena}</div>
                <div style="margin:20px">CORREO: ${newBattery.email}</div>
                <div style="margin:20px">FECHA: ${newBattery.date}</div>
                <div style="margin:20px">${trabajadores}</div>
              </body>
            </html>,
        `,
    });
    return newBattery.save();
  }

  async getAppointCompanys(): Promise<AppointCompany[]> {
    const batteries = await this.appointCompanyModel.find();
    return batteries;
  }

  async getAppointCompany(id: string): Promise<AppointCompany> {
    const battery = await this.appointCompanyModel.findById(id);
    return battery;
  }

  async deleteAppointCompany(id: string): Promise<any> {
    const battery = await this.appointCompanyModel.findByIdAndDelete(id);
    return battery;
  }

  async updateAppointCompany(
    id: string,
    updateAppointCompanyDTO: UpdateAppointCompanyDTO,
  ): Promise<AppointCompany> {
    const updatedAppointment = await this.appointCompanyModel
      .findByIdAndUpdate(id, { $set: updateAppointCompanyDTO }, { new: true })
      .exec();
    return updatedAppointment;
  }

  formatExaminees(ap: AppointCompany) {
    let cadena = 'TRABAJADORES:<br> <br>';
    for (let examinee of ap.examinees) {
      cadena +=
        'NOMBRE: ' +
        examinee.name +
        '&nbsp;&nbsp;&nbsp;&nbsp; RUT: ' +
        examinee.rut +
        '&nbsp;&nbsp;&nbsp;&nbsp; EDAD: ' +
        examinee.age +
        '&nbsp;&nbsp;&nbsp;&nbsp; CARGO: ' +
        examinee.jobTitle +
        '<br>';
    }
    return cadena;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from './dto/appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  async createAppointment(
    @Res() res,
    @Body() createAppointmentDTO: CreateAppointmentDTO,
  ) {
    const battery = await this.appointmentService.createAppointment(
      createAppointmentDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Battery Successfully Created',
      battery,
    });
  }

  @Get()
  async getAppointments(@Res() res) {
    const battery = await this.appointmentService.getAppointments();
    return res.status(HttpStatus.OK).json(battery);
  }

  @Get('/:id')
  async getAppointment(@Res() res, @Param('id') id) {
    const battery = await this.appointmentService.getAppointment(id);
    if (!battery) throw new NotFoundException('Battery does not exist!');
    return res.status(HttpStatus.OK).json(battery);
  }

  @Delete('/:id')
  async deleteAppointment(@Res() res, @Param('id') id) {
    const battery = await this.appointmentService.deleteAppointment(id);
    if (!battery) throw new NotFoundException('Battery does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Battery Deleted Successfully',
      battery,
    });
  }

  @Patch('/:id')
  async updateAppointment(
    @Res() res,
    @Body() updateAppointmentDTO: UpdateAppointmentDTO,
    @Param('id') id,
  ) {
    const battery = await this.appointmentService.updateAppointment(
      id,
      updateAppointmentDTO,
    );
    if (!battery) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Battery Updated Successfully',
      battery,
    });
  }
}

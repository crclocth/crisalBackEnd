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
import { DoctorService } from './doctor.service';
import { CreateDoctorDTO, UpdateDoctorDTO } from './dto/doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Post()
  async createDoctor(@Res() res, @Body() createDoctorDTO: CreateDoctorDTO) {
    const company = await this.doctorService.createDoctor(createDoctorDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Company Successfully Created',
      company,
    });
  }

  @Get()
  async getDoctors(@Res() res) {
    const company = await this.doctorService.getDoctors();
    return res.status(HttpStatus.OK).json(company);
  }

  @Get('/:id')
  async getDoctor(@Res() res, @Param('id') id) {
    const company = await this.doctorService.getDoctor(id);
    if (!company) throw new NotFoundException('Company does not exist!');
    return res.status(HttpStatus.OK).json(company);
  }

  @Delete('/:id')
  async deleteDoctor(@Res() res, @Param('id') id) {
    const company = await this.doctorService.deleteDoctor(id);
    if (!company) throw new NotFoundException('Company does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Company Deleted Successfully',
      company,
    });
  }

  @Patch('/:id')
  async updateDoctor(
    @Res() res,
    @Body() updateDoctorDTO: UpdateDoctorDTO,
    @Param('id') id,
  ) {
    const company = await this.doctorService.updateDoctor(id, updateDoctorDTO);
    if (!company) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Company Updated Successfully',
      company,
    });
  }
}

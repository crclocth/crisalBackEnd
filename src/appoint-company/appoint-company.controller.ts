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
import { AppointCompanyService } from './appoint-company.service';
import {
  CreateAppointCompanyDTO,
  UpdateAppointCompanyDTO,
} from './dto/appoint-company.dto';

@Controller('appoint-company')
export class AppointCompanyController {
  constructor(private appointCompanyService: AppointCompanyService) {}

  @Post()
  async createAppointCompany(
    @Res() res,
    @Body() createAppointCompanyDTO: CreateAppointCompanyDTO,
  ) {
    const battery = await this.appointCompanyService.createAppointCompany(
      createAppointCompanyDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Battery Successfully Created',
      battery,
    });
  }

  @Get()
  async getAppointCompanys(@Res() res) {
    const battery = await this.appointCompanyService.getAppointCompanys();
    return res.status(HttpStatus.OK).json(battery);
  }

  @Get('/:id')
  async getAppointCompany(@Res() res, @Param('id') id) {
    const battery = await this.appointCompanyService.getAppointCompany(id);
    if (!battery) throw new NotFoundException('Battery does not exist!');
    return res.status(HttpStatus.OK).json(battery);
  }

  @Delete('/:id')
  async deleteAppointCompany(@Res() res, @Param('id') id) {
    const battery = await this.appointCompanyService.deleteAppointCompany(id);
    if (!battery) throw new NotFoundException('Battery does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Battery Deleted Successfully',
      battery,
    });
  }

  @Patch('/:id')
  async updateAppointCompany(
    @Res() res,
    @Body() updateAppointCompanyDTO: UpdateAppointCompanyDTO,
    @Param('id') id,
  ) {
    const battery = await this.appointCompanyService.updateAppointCompany(
      id,
      updateAppointCompanyDTO,
    );
    if (!battery) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Battery Updated Successfully',
      battery,
    });
  }
}

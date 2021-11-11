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
import {
  CreateInformationDTO,
  UpdateInformationDTO,
} from './dto/information.dto';
import { InformationService } from './information.service';

@Controller('information')
export class InformationController {
  constructor(private informationService: InformationService) {}

  @Post()
  async createInformation(
    @Res() res,
    @Body() createInformationDTO: CreateInformationDTO,
  ) {
    const information = await this.informationService.createInformation(
      createInformationDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Information Successfully Created',
      information,
    });
  }

  @Get()
  async getInformations(@Res() res) {
    const information = await this.informationService.getInformations();
    return res.status(HttpStatus.OK).json(information);
  }

  @Get('/:id')
  async getInformation(@Res() res, @Param('id') id) {
    const information = await this.informationService.getInformation(id);
    if (!information)
      throw new NotFoundException('Information does not exist!');
    return res.status(HttpStatus.OK).json(information);
  }

  @Delete('/:id')
  async deleteInformation(@Res() res, @Param('id') id) {
    const information = await this.informationService.deleteInformation(id);
    if (!information)
      throw new NotFoundException('Information does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Information Deleted Successfully',
      information,
    });
  }

  @Patch('/:id')
  async updateInformation(
    @Res() res,
    @Body() updateInformationDTO: UpdateInformationDTO,
    @Param('id') id,
  ) {
    const information = await this.informationService.updateInformation(
      id,
      updateInformationDTO,
    );
    if (!information) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Information Updated Successfully',
      information,
    });
  }
}

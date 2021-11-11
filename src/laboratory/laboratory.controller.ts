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
import { CreateLaboratoryDTO, UpdateLaboratoryDTO } from './dto/laboratory.dto';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private laboratoryService: LaboratoryService) {}

  @Post()
  async createLaboratory(
    @Res() res,
    @Body() createLaboratoryDTO: CreateLaboratoryDTO,
  ) {
    const laboratory = await this.laboratoryService.createLaboratory(
      createLaboratoryDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Laboratory Successfully Created',
      laboratory,
    });
  }

  @Get()
  async getLaboratorys(@Res() res) {
    const information = await this.laboratoryService.getLaboratorys();
    return res.status(HttpStatus.OK).json(information);
  }

  @Get('/:id')
  async getLaboratory(@Res() res, @Param('id') id) {
    const information = await this.laboratoryService.getLaboratory(id);
    if (!information) throw new NotFoundException('Laboratory does not exist!');
    return res.status(HttpStatus.OK).json(information);
  }

  @Delete('/:id')
  async deleteLaboratory(@Res() res, @Param('id') id) {
    const information = await this.laboratoryService.deleteLaboratory(id);
    if (!information) throw new NotFoundException('Laboratory does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Laboratory Deleted Successfully',
      information,
    });
  }

  @Patch('/:id')
  async updateLaboratory(
    @Res() res,
    @Body() updateLaboratoryDTO: UpdateLaboratoryDTO,
    @Param('id') id,
  ) {
    const information = await this.laboratoryService.updateLaboratory(
      id,
      updateLaboratoryDTO,
    );
    if (!information) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Laboratory Updated Successfully',
      information,
    });
  }
}

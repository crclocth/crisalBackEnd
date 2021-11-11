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
import { ExamineeService } from './examinee.service';
import { CreateExamineeDTO, UpdateExamineeDTO } from './dto/examinee.dto';

@Controller('examinee')
export class ExamineeController {
    constructor(private examineeService: ExamineeService) {}

  @Post()
  async createExaminee(@Res() res, @Body() createExamineeDTO: CreateExamineeDTO) {
    const examinee = await this.examineeService.createExaminee(createExamineeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Examinee Successfully Created',
      examinee,
    });
  }

  @Get()
  async getExaminees(@Res() res) {
    const examinee = await this.examineeService.getExaminees();
    return res.status(HttpStatus.OK).json(examinee);
  }

  @Get('/:id')
  async getExaminee(@Res() res, @Param('id') id) {
    const examinee = await this.examineeService.getExaminee(id);
    if (!examinee) throw new NotFoundException('Examinee does not exist!');
    return res.status(HttpStatus.OK).json(examinee);
  }

  @Delete('/:id')
  async deleteExaminee(@Res() res, @Param('id') id) {
    const examinee = await this.examineeService.deleteExaminee(id);
    if (!examinee) throw new NotFoundException('Examinee does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Examinee Deleted Successfully',
      examinee,
    });
  }

  @Patch('/:id')
  async updateExaminee(
    @Res() res,
    @Body() updateExamineeDTO: UpdateExamineeDTO,
    @Param('id') id,
  ) {
    const examinee = await this.examineeService.updateExaminee(id, updateExamineeDTO);
    if (!examinee) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Examinee Updated Successfully',
      examinee,
    });
  }
}

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
import { PhysiologicalService } from './physiological.service';
import { CreatePhysiologicalDTO, UpdatePhysiologicalDTO } from './dto/physiological.dto';

@Controller('physiological')
export class PhysiologicalController {
    constructor(private physiologicalService: PhysiologicalService) {}

  @Post()
  async createPhysiological(@Res() res, @Body() createPhysiologicalDTO: CreatePhysiologicalDTO) {
    const physiological = await this.physiologicalService.createPhysiological(createPhysiologicalDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Physiological Successfully Created',
      physiological,
    });
  }

  @Get()
  async getPhysiologicals(@Res() res) {
    const physiological = await this.physiologicalService.getPhysiologicals();
    return res.status(HttpStatus.OK).json(physiological);
  }

  @Get('/:id')
  async getPhysiological(@Res() res, @Param('id') id) {
    const physiological = await this.physiologicalService.getPhysiological(id);
    if (!physiological) throw new NotFoundException('Physiological does not exist!');
    return res.status(HttpStatus.OK).json(physiological);
  }

  @Delete('/:id')
  async deletePhysiological(@Res() res, @Param('id') id) {
    const physiological = await this.physiologicalService.deletePhysiological(id);
    if (!physiological) throw new NotFoundException('Physiological does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Physiological Deleted Successfully',
      physiological,
    });
  }

  @Patch('/:id')
  async updatePhysiological(
    @Res() res,
    @Body() updatePhysiologicalDTO: UpdatePhysiologicalDTO,
    @Param('id') id,
  ) {
    const physiological = await this.physiologicalService.updatePhysiological(id, updatePhysiologicalDTO);
    if (!physiological) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Physiological Updated Successfully',
      physiological,
    });
  }
}

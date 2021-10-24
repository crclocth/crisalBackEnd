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
import { CreateNewDTO, UpdateNewDTO } from './dto/new.dto';
import { NewService } from './new.service';

@Controller('new')
export class NewController {
  constructor(private newService: NewService) {}

  @Post()
  async createNew(@Res() res, @Body() createNewDTO: CreateNewDTO) {
    const note = await this.newService.createNew(createNewDTO);
    return res.status(HttpStatus.OK).json({
      message: 'New Successfully Created',
      note,
    });
  }

  @Get()
  async getNews(@Res() res) {
    const note = await this.newService.getNews();
    return res.status(HttpStatus.OK).json(note);
  }

  @Get('/:id')
  async getNew(@Res() res, @Param('id') id) {
    const note = await this.newService.getNew(id);
    if (!note) throw new NotFoundException('New does not exist!');
    return res.status(HttpStatus.OK).json(note);
  }

  @Delete('/:id')
  async deleteNew(@Res() res, @Param('id') id) {
    const note = await this.newService.deleteNew(id);
    if (!note) throw new NotFoundException('New does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'New Deleted Successfully',
      note,
    });
  }

  @Patch('/:id')
  async updateNew(
    @Res() res,
    @Body() updateNewDTO: UpdateNewDTO,
    @Param('id') id,
  ) {
    const note = await this.newService.updateNew(id, updateNewDTO);
    if (!note) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Client Updated Successfully',
      note,
    });
  }
}

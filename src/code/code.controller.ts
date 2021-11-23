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
import { CodeService } from './code.service';
import { CreateCodeDTO, UpdateCodeDTO } from './dto/code.dto';

@Controller('code')
export class CodeController {
  constructor(private codeService: CodeService) {}

  @Post()
  async createCode(@Res() res, @Body() createEmployeeDTO: CreateCodeDTO) {
    const employee = await this.codeService.createCode(createEmployeeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Code Successfully Created',
      employee,
    });
  }

  @Get()
  async getCodes(@Res() res) {
    const employee = await this.codeService.getCodes();
    return res.status(HttpStatus.OK).json(employee);
  }

  @Get('/:id')
  async getCode(@Res() res, @Param('id') id) {
    const employee = await this.codeService.getCode(id);
    if (!employee) throw new NotFoundException('Code does not exist!');
    return res.status(HttpStatus.OK).json(employee);
  }

  @Delete('/:id')
  async deleteCode(@Res() res, @Param('id') id) {
    const employee = await this.codeService.deleteCode(id);
    if (!employee) throw new NotFoundException('Code does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Code Deleted Successfully',
      employee,
    });
  }

  @Patch('/:id')
  async updateCode(
    @Res() res,
    @Body() updateCodeDTO: UpdateCodeDTO,
    @Param('id') id,
  ) {
    const employee = await this.codeService.updateCode(id, updateCodeDTO);
    if (!employee) throw new NotFoundException('Code does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Code Updated Successfully',
      employee,
    });
  }
}

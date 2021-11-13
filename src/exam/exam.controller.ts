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
import { ExamService } from './exam.service';
import { CreateExamDTO, UpdateExamDTO } from './dto/exam.dto';

@Controller('exam')
export class ExamController {
  constructor(private examService: ExamService) {}

  @Post()
  async createExam(@Res() res, @Body() createExamDTO: CreateExamDTO) {
    const exam = await this.examService.createExam(createExamDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Exam Successfully Created',
      exam,
    });
  }

  @Get('/:type')
  async getExams(@Res() res, @Param('type') type) {
    let exam = [];
    if (type === 'all') {
      exam = await this.examService.getExams();
    }
    if (type === 'General') {
      exam = await this.examService.getExamsGeneral();
    }
    if (type === 'Laboratorio') {
      exam = await this.examService.getExamsLab();
    }
    return res.status(HttpStatus.OK).json(exam);
  }

  @Get('/:id')
  async getExam(@Res() res, @Param('id') id) {
    const exam = await this.examService.getExam(id);
    if (!exam) throw new NotFoundException('Exam does not exist!');
    return res.status(HttpStatus.OK).json(exam);
  }

  @Delete('/:id')
  async deleteExam(@Res() res, @Param('id') id) {
    const exam = await this.examService.deleteExam(id);
    if (!exam) throw new NotFoundException('Exam does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Exam Deleted Successfully',
      exam,
    });
  }

  @Patch('/:id')
  async updateExam(
    @Res() res,
    @Body() updateExamDTO: UpdateExamDTO,
    @Param('id') id,
  ) {
    const exam = await this.examService.updateExam(id, updateExamDTO);
    if (!exam) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Exam Updated Successfully',
      exam,
    });
  }
}

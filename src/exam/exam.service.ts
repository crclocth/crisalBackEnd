import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExamDTO, UpdateExamDTO } from './dto/exam.dto';
import { Exam } from './model/exam.model';

@Injectable()
export class ExamService {
  constructor(
    @InjectModel('Exam')
    private readonly examModel: Model<Exam>,
  ) {}

  async createExam(createExamDTO: CreateExamDTO): Promise<Exam> {
    const newExam = new this.examModel(createExamDTO);
    return newExam.save();
  }

  async getExams(): Promise<Exam[] | null> {
    const exams = await this.examModel.find();
    return exams;
  }

  async getExamsGeneral(): Promise<Exam[] | null> {
    const exams = await this.examModel.find({
      type: 'General',
    });
    return exams;
  }

  async getExamsLab(): Promise<Exam[]> {
    const exams = await this.examModel.find({
      type: 'Laboratorio',
    });
    return exams;
  }

  async getExam(id: string): Promise<Exam> {
    const exam = await this.examModel.findById(id);
    return exam;
  }

  async deleteExam(id: string): Promise<any> {
    const exam = await this.examModel.findByIdAndDelete(id);
    return exam;
  }

  async updateExam(id: string, updateExamDTO: UpdateExamDTO): Promise<Exam> {
    const updatedExam = await this.examModel
      .findByIdAndUpdate(id, { $set: updateExamDTO }, { new: true })
      .exec();
    return updatedExam;
  }
}

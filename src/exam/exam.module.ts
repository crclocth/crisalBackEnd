import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { examSchema } from './schema/exam.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Exam', schema: examSchema }]),
  ],
  controllers: [ExamController],
  providers: [ExamService]
})
export class ExamModule {}

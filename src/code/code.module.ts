import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeController } from './code.controller';
import { CodeService } from './code.service';
import { codeSchema } from './schema/code.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Code', schema: codeSchema }])],
  controllers: [CodeController],
  providers: [CodeService],
})
export class CodeModule {}

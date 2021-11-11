import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewController } from './new.controller';
import { NewService } from './new.service';
import { newSchema } from './schema/new.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'New', schema: newSchema }])],
  controllers: [NewController],
  providers: [NewService],
})
export class NewModule {}

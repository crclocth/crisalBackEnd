import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { resultsSchema } from './schema/results.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Results', schema: resultsSchema }]),
  ],
  controllers: [ResultsController],
  providers: [ResultsService]
})
export class ResultsModule {}

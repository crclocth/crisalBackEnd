import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';
import { informationSchema } from './schema/information.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Information', schema: informationSchema },
    ]),
  ],
  controllers: [InformationController],
  providers: [InformationService],
})
export class InformationModule {}

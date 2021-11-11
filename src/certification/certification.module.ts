import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificationController } from './certification.controller';
import { CertificationService } from './certification.service';
import { certificationSchema } from './schema/certification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Certification', schema: certificationSchema },
    ]),
  ],
  controllers: [CertificationController],
  providers: [CertificationService],
})
export class CertificationModule {}

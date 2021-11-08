import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificateController } from './certificate.controller';
import { CertificateService } from './certificate.service';
import { certificateSchema } from './schema/certificate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Certificate', schema: certificateSchema }]),
  ],
  controllers: [CertificateController],
  providers: [CertificateService]
})
export class CertificateModule {}

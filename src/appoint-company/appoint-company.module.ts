import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointCompanyController } from './appoint-company.controller';
import { AppointCompanyService } from './appoint-company.service';
import { appointCompanySchema } from './schema/appoint-company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AppointCompany', schema: appointCompanySchema },
    ]),
  ],
  controllers: [AppointCompanyController],
  providers: [AppointCompanyService],
})
export class AppointCompanyModule {}

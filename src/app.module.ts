import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { InformationModule } from './information/information.module';
import { CertificationModule } from './certification/certification.module';
import { ClientModule } from './client/client.module';
import { NewModule } from './new/new.module';
import { CompanyModule } from './company/company.module';
import { CertificateModule } from './certificate/certificate.module';
import { ResultsModule } from './results/results.module';
import { ExamModule } from './exam/exam.module';
import { BatteryModule } from './battery/battery.module';
import { PhysiologicalModule } from './physiological/physiological.module';
import { ExamineeModule } from './examinee/examinee.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { AppointmentModule } from './appointment/appointment.module';
import { AppointCompanyModule } from './appoint-company/appoint-company.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      useFactory: async (configService: ConfigService) => ({
        //uri: configService.get<string>('mongodb+srv://felipe:59DGPzjEiIajzXAI@crisal.tsqq0.mongodb.net/test'),
        uri: configService.get<string>('MONGO_URI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY,
    }),
    ContactModule,
    EmployeeModule,
    InformationModule,
    CertificationModule,
    ClientModule,
    NewModule,
    CompanyModule,
    CertificateModule,
    ResultsModule,
    ExamModule,
    BatteryModule,
    PhysiologicalModule,
    ExamineeModule,
    UserModule,
    AuthModule,
    LaboratoryModule,
    AppointmentModule,
    AppointCompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

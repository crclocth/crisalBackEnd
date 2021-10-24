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

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    ContactModule,
    EmployeeModule,
    InformationModule,
    CertificationModule,
    ClientModule,
    NewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

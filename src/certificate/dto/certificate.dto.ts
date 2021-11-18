import { IsString, IsNotEmpty, MaxLength, IsDate } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Company } from 'src/company/model/company.model';
import { Examinee } from 'src/examinee/model/examinee.model';
import { Physiological } from 'src/physiological/model/physiological.model';
import { Results } from 'src/results/model/results.model';
import { Doctor } from 'src/doctor/model/doctor.model';

export class CreateCertificateDTO {
  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly conclusion: string;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly suggestions: string;

  @IsString()
  @MaxLength(10, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly validity: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly validityDate: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly doctor: Doctor;

  @IsNotEmpty()
  @ApiProperty()
  readonly company: Company;

  @IsNotEmpty()
  @ApiProperty()
  readonly examinee: Examinee;

  @IsNotEmpty()
  @ApiProperty()
  readonly physiological: Physiological;

  @ApiProperty()
  readonly generalResults: Results[];

  @ApiProperty()
  readonly labResults: Results[];
}

export class UpdateCertificateDTO extends PartialType(CreateCertificateDTO) {}

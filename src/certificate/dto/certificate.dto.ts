import { IsString, IsNotEmpty, MaxLength, IsDate } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

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
  @MaxLength(45, {
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
  readonly doctor: string;
}

export class UpdateCertificateDTO extends PartialType(CreateCertificateDTO) {}

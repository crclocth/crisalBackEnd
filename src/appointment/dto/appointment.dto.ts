import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDTO {
  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly rut: string;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly email: string;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly battery: string;

  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly date: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly age: number;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly jobTitle: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly isConfirmed: boolean;
}

export class UpdateAppointmentDTO extends PartialType(CreateAppointmentDTO) {}

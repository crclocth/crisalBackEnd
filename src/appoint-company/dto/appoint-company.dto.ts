import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Appointment } from 'src/appointment/model/appointment.model';

export class CreateAppointCompanyDTO {
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
  @IsNotEmpty()
  @ApiProperty()
  readonly faena: string;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @MaxLength(255, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  readonly examinees: Appointment[];

  @IsNotEmpty()
  @ApiProperty()
  readonly isConfirmed: boolean;
}

export class UpdateAppointCompanyDTO extends PartialType(
  CreateAppointCompanyDTO,
) {}

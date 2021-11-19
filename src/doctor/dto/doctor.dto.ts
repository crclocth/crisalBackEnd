import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDTO {
  @IsString()
  @MaxLength(120, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(10, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly rut: string;

  @IsString()
  @MaxLength(80, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateDoctorDTO extends PartialType(CreateDoctorDTO) {}

import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateResultsDTO {
  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly exam: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly laboratory: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly measurementUnit: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;

  @IsString()
  @MaxLength(45, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly remark: string;

  @IsNumber()
  @ApiProperty()
  readonly result: number;
}

export class UpdateResultsDTO extends PartialType(CreateResultsDTO) {}

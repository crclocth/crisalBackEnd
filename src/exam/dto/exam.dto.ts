import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateExamDTO {
  @IsString()
  @MaxLength(120, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(20, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @MaxLength(100, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly laboratory: string;

  @IsString()
  @MaxLength(10, {
    message: 'Ingreso de datos incorrecto ',
  })
  @ApiProperty()
  readonly measurementUnit: string;
}

export class UpdateExamDTO extends PartialType(CreateExamDTO) {}

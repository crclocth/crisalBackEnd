import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateResultsDTO {
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
  @IsNotEmpty()
  @ApiProperty()
  readonly remark: string;

  @IsNumber()  
  @IsNotEmpty()
  @ApiProperty()
  readonly result: number;  
}

export class UpdateResultsDTO extends PartialType(CreateResultsDTO) {}
import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePhysiologicalDTO {
  @IsNumber()  
  @IsNotEmpty()
  @ApiProperty()
  readonly heartRate: number;

  @IsString()
  @MaxLength(10, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly bloodPressure: string;

  @IsNumber()  
  @IsNotEmpty()
  @ApiProperty()
  readonly weight: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly height: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly imc: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly sat: number;
}

export class UpdatePhysiologicalDTO extends PartialType(CreatePhysiologicalDTO) {}
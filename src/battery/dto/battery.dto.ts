import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBatteryDTO {
  @IsString()
  @MaxLength(120, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(400, {
    message: 'Ingreso de datos incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  @ApiProperty()
  readonly generalExams: string[];

  @ApiProperty()
  readonly labExams: string[];
}

export class UpdateBatteryDTO extends PartialType(CreateBatteryDTO) {}

import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDTO {
  @IsString()
  @MaxLength(120, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(80, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly profession: string;

  @IsString()
  @MaxLength(10, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly abreprofession: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  @IsString()
  @MaxLength(500, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;
}

export class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO) {}

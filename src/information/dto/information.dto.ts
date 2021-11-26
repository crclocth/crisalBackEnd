import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInformationDTO {
  @IsNumber()
  @MaxLength(15, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly telephone1: number;

  @IsNumber()
  @MaxLength(15, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly telephone2: number;

  @IsString()
  @MaxLength(60, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @MaxLength(320, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly mail: string;

  @IsString()
  @MaxLength(500, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly aboutUs: string;

  @IsString()
  @MaxLength(500, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly vision: string;

  @IsString()
  @MaxLength(500, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly mission: string;

  @IsString()
  @MaxLength(500, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly values: string;

  @IsString()
  @MaxLength(1000, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly location: string;
}

export class UpdateInformationDTO extends PartialType(CreateInformationDTO) {}

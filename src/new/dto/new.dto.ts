import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateNewDTO {
  @IsString()
  @MaxLength(100, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @MaxLength(250, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly lead: string;

  @IsString()
  @MaxLength(2000, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateNewDTO extends PartialType(CreateNewDTO) {}

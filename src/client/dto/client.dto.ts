import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateClientDTO {
  @IsString()
  @MaxLength(120, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @MaxLength(500, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateClientDTO extends PartialType(CreateClientDTO) {}

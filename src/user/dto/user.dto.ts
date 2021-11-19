import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsString()
  @MaxLength(120, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(60, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly mail: string;

  @IsString()
  @MaxLength(60, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}

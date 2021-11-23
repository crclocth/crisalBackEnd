import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCodeDTO {
  @IsNotEmpty()
  @ApiProperty()
  readonly serial: number;
}

export class UpdateCodeDTO extends PartialType(CreateCodeDTO) {}

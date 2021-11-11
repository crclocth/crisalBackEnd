import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateLaboratoryDTO {
  @IsString()
  @MaxLength(255, {
    message: 'input incorrecto ',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}

export class UpdateLaboratoryDTO extends PartialType(CreateLaboratoryDTO) {}

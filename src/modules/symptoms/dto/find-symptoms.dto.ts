import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'

export class FindSymptoms {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  symptomsIds: [string]
}

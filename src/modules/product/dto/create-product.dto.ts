import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateProduct {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  congdung: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  doituong: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  thanhphan: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cachdung: string

  @ApiProperty()
  imageUrls: string

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  giaca: number
}

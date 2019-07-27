import { IsNotEmpty, IsDateString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class UpdateCategoryDto {

  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(100)
  description: string;

}
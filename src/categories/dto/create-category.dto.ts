import { IsNotEmpty, IsDateString, MinLength, MaxLength } from 'class-validator';

export class CreateCategoryDto {

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(100)
  description: string;

}
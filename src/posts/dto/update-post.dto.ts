import { IsNotEmpty, IsOptional, IsDateString, MinLength, MaxLength } from "class-validator";

export class UpdatePostDto {

  @IsOptional()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(300)
  title: string;

  @IsOptional()
  @IsNotEmpty()
  author: string;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  content: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  date: string;
}

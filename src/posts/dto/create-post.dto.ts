import { IsNotEmpty, IsDateString, MinLength, MaxLength } from 'class-validator';

export class CreatePostDto {

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(300)
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  @MinLength(10)
  content: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;
}
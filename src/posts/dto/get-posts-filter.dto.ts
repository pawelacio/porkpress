import { IsOptional, IsNotEmpty, IsInt } from "class-validator";

export class GetPostsFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  limit: number;
}
import { IsOptional, IsNotEmpty } from "class-validator";

export class GetPostsFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
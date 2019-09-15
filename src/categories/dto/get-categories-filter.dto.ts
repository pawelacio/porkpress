import { IsOptional, IsNotEmpty } from "class-validator";

export class GetCategoriesFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  limit: number;
}
import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { GetCategoriesFilterDto } from "./dto/get-categories-filter.dto";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

  async getCategories(getCategoriesFilterDto: GetCategoriesFilterDto): Promise<Category[]> {
    const { search, limit } = getCategoriesFilterDto;
    const query = this.createQueryBuilder('category');

    if ( search ) {
      query.andWhere('(category.name LIKE :search OR category.description LIKE :search)', { search: `%${ search}%`});
    }

    if ( limit ) {
      query.limit(limit);
    }

    const categories = await query.getMany();

    return categories;
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { name, description } = createCategoryDto;

    const category = new Category();
    category.name = name;
    category.description = description;
    await category.save();

    return category;
  }
}
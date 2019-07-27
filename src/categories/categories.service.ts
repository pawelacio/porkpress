import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './categories.repository';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.createCategory(createCategoryDto);
  }

  async getCategoryById(id: number): Promise<Category> {
    const found = this.categoryRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Category with if "${ id } not found!"`)
    }

    return found;
  }

}

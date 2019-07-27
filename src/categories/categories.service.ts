import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './categories.repository';
import { Category } from './category.entity';
import { Not } from 'typeorm';
import { UpdateCategoryDto } from './dto/update-category.dto';

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
    const found = await this.categoryRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Category with if "${ id } not found!"`)
    }

    return found;
  }

  async deleteCategory(id: number): Promise<void> {
    const result = await this.categoryRepository.delete(id);

   if (result.affected === 0) {
    throw new NotFoundException(`Category with id "${id}" not found`);
   }
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const { name, description } = updateCategoryDto;
    const category = await this.getCategoryById(id);

    category.name = name;
    category.description = description;
    await category.save();

    return category;
  }

}

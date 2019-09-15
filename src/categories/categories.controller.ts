import { Controller, Get, Post, Delete, Patch, Param, ParseIntPipe, Body, UsePipes, ValidationPipe, Query, UseGuards } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { GetCategoriesFilterDto } from './dto/get-categories-filter.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoriesController {

  constructor(private categoryService: CategoriesService) {}

  @Get()
  getCategories(@Query(ValidationPipe) filterCategoriesDto: GetCategoriesFilterDto): Promise<Category[]> {
   return this.categoryService.getCategories(filterCategoriesDto);
  }

  @Get('/:id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }
  
  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoryService.deleteCategory(id);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<Category> {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

}

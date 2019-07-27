import { Controller, Get, Post, Delete, Patch, Param, ParseIntPipe, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoriesController {

  constructor(private categoryService: CategoriesService) {}

  // @Get()
  // getCategories() {
  //   return 'Dupa';
  // }

  // @Get('/:id')
  // findCategoryById() {

  // }

  @Post()
  @UsePipes(new ValidationPipe())
  createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }
  
  // @Delete('/:id')
  // deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<void> {

  // }

  // @Patch('/:id')
  // @UsePipes(new ValidationPipe())
  // updateCategory(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateCategory: UpdateCategoryDto
  // ): Promise<Category> {
    
  // }

}

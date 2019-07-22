import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { create } from 'domain';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

  constructor(private postService: PostsService) {}

  @Get()
  findAll(): string {
    return 'Find all posts';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${ id } post`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes a #${ id } post`;
  }
}

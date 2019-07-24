import { Controller, Get, Post, Param, Delete, Body, Patch, UsePipes, ValidationPipe, ParseIntPipe, Query } from '@nestjs/common';
import { Request } from 'express';
import { create } from 'domain';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostType } from '../posts/post.entity';
import { GetPostsFilterDto } from './dto/get-posts-filter.dto';

@Controller('posts')
export class PostsController {

  constructor(private postService: PostsService) {}

  @Get()
  getPosts(@Query(ValidationPipe) filterDto: GetPostsFilterDto): Promise<PostType[]> {
    return this.postService.getPosts(filterDto);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PostType> {
    return this.postService.getPostById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto ): Promise<PostType> {
    return this.postService.createPost(createPostDto)
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postService.deletePost(id);
  }

  @Patch('/:id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPostDto: CreatePostDto
  ): Promise<PostType> {
    return this.postService.updatePost(id, createPostDto);
  }
}

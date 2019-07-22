import { Controller, Get, Post, Param, Delete, Body, Patch } from '@nestjs/common';
import { Request } from 'express';
import { create } from 'domain';
import { PostsService } from './posts.service';
import { PostType } from './post.model';
import { CreatePostDto } from './dto/create-task.dto';

@Controller('posts')
export class PostsController {

  constructor(private postService: PostsService) {}

  @Get()
  findAllPosts(): PostType[] {
    return this.postService.getAllPosts();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto ): PostType {
    return this.postService.createPost(createPostDto)
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }

  @Patch('/:id')
  updatePost(
    @Param('id') id: string,
    @Body() createPostDto: CreatePostDto
  ) {
    return this.postService.updatePost(id, createPostDto);
  }
}

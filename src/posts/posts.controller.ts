import { Controller, Get, Post, Param, Delete, Body, Patch, UsePipes, ValidationPipe, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { create } from 'domain';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostType } from '../posts/post.entity';
import { GetPostsFilterDto } from './dto/get-posts-filter.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

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
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  createPost(
    @Body() createPostDto: CreatePostDto,
    @GetUser() user: User,
    ): Promise<PostType> {
    return this.postService.createPost(createPostDto, user)
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postService.deletePost(id);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto
  ): Promise<PostType> {
    return this.postService.updatePost(id, updatePostDto);
  }
}

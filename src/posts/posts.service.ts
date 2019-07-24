import { Injectable, NotFoundException } from '@nestjs/common';
import { PostStatus } from './post-status.enum';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRepository } from './post.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { GetPostsFilterDto } from './dto/get-posts-filter.dto';
import { PostType } from 'dist/posts/post.model';
@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository
  ) {}

    async getPosts(filterDto: GetPostsFilterDto): Promise<Post[]> {
      return this.postRepository.getPosts(filterDto);
    }

  // getAllPosts(): PostType[] {
  //   return this.posts;
  // }

  async getPostById(id: number): Promise<Post> {
    const found = await this.postRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with id "${id}" not found`);
    }

    return found;
  }

  async deletePost(id: number): Promise<void> {
    const result = await this.postRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id "${id}" not found`);
    }
  }

  async updatePost(id: number, createPostDto: CreatePostDto): Promise<Post> {
    const { title, author, content, date } = createPostDto;
    const post = await this.getPostById(id);

    post.title = title;
    post.author = author;
    post.content = content;
    post.date = date;
    post.modificationDate = date;
    await post.save();

    return post;
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    return this.postRepository.createPost(createPostDto);
  }
}

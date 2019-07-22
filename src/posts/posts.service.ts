import { Injectable } from '@nestjs/common';
import { PostType, PostStatus } from './post.model';
import * as uuid from 'uuid/v1';
import { CreatePostDto } from './dto/create-task.dto';
@Injectable()
export class PostsService {
  private posts: PostType[] = [];

  getAllPosts(): PostType[] {
    return this.posts;
  }

  getPostById(id: string) {
    return this.posts.find(post => post.id === id);
  }

  deletePost(id: string) {
    return this.posts.splice(this.posts.findIndex(item => item.id === id), 1);
  }

  // TODO: Do something with this modificationDate
  updatePost(id: string, createPostDto: CreatePostDto) {
    const { title, author, content, date } = createPostDto;
    const post = this.getPostById(id);

    post.title = title;
    post.author = author;
    post.content = content;
    post.date = date;
    post.modificationDate = date;

    return post;
  }

  createPost(createPostDto: CreatePostDto): PostType {
    const { title, author, content, date } = createPostDto;

    const post: PostType = {
      id: uuid(),
      title,
      author,
      content,
      date,
      modificationDate: date,
      commentCount: 0,
      status: PostStatus.PUBLISH,
    }

    this.posts.push(post);
    return post;
  }
}

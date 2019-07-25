import { Repository, EntityRepository } from "typeorm";
import { Post } from "./post.entity";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostStatus } from "./post-status.enum";
import { GetPostsFilterDto } from "./dto/get-posts-filter.dto";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  async getPosts(filterDto: GetPostsFilterDto): Promise<Post[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('post');

    if ( search ) {
      query.andWhere('(post.title LIKe :search OR post.content LIKE :search)', { search: `%${ search }%`})
    }

    const posts = await query.getMany();

    return posts;
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { title, author, content, date } = createPostDto;

    const post = new Post();
    post.title = title;
    post.author = author;
    post.content = content;
    post.date = date;
    post.commentCount = 0;
    post.status = PostStatus.PUBLISH;
    await post.save();

    return post;
  }
}
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/post.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'porkpress',
  entities: [
    // '../**/*.entity{.ts,.js}',
    Post
  ],
  synchronize: true,
}
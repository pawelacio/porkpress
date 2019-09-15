import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/post.entity';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'porkpress',
  entities: [
    // '../**/*.entity{.ts,.js}',
    Post,
    Category,
    User
  ],
  synchronize: true,
}
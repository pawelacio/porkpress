import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, VersionColumn, ManyToMany, ManyToOne } from "typeorm";
import { PostStatus } from "./post-status.enum";
import { User } from '../auth/user.entity';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column()
  date: string;

  @Column()
  commentCount: number;

  @Column()
  status: PostStatus;

  @UpdateDateColumn()
  modificationDate: string;

  @VersionColumn()
  version: number;

  @ManyToOne(type => User, user => user.posts, { eager: false })
  user: User;

}
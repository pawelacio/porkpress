import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PostStatus } from "./post-status.enum";

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
  modificationDate: string;

  @Column()
  commentCount: number;

  @Column()
  status: PostStatus;
}
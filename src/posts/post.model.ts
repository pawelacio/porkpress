export interface PostType {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  modificationDate: string;
  commentCount: number;
  status: PostStatus;
}

export enum PostStatus {
  PUBLISH = 'PUBLISH',
  FUTURE = 'FUTURE',
  DRAFT = 'DRAFT',
  PRIVATE = 'PRIVATE',
  TRASH = 'TRASH',
}
// Global type definitions for the blog

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: Author;
  tags?: string[];
  coverImage?: string;
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

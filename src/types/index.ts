export interface Author {
  id: number;
  name: string;
  email?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  color_hex: string;
}

export interface BlogPostListItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
  status_label: string;
  display_order: number;
  view_count: number;
  published_at: string | null;
  formatted_published_at: string | null;
  author: Author;
  category: Category | null;
}

export interface BlogPostDetail extends BlogPostListItem {
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  scheduled_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  current_page: number;
  from: number | null;
  last_page: number;
  per_page: number;
  to: number | null;
  total: number;
}

export interface ApiListResponse<T> {
  success: boolean;
  data: T[];
  pagination: Pagination;
  message?: string;
}

export interface ApiDetailResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

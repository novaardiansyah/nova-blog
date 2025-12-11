import {
  BlogPostListItem,
  BlogPostDetail,
  ApiListResponse,
  ApiDetailResponse,
} from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

/**
 * Internal fetch wrapper for API calls
 */
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (API_KEY) {
    headers["Authorization"] = `Bearer ${API_KEY}`;
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.message || `API error: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}

/**
 * Query parameters for listing posts
 */
export interface GetPostsParams {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: number;
}

/**
 * Get published blog posts with pagination
 */
export async function getPublishedPosts(
  params?: GetPostsParams
): Promise<ApiListResponse<BlogPostListItem>> {
  const searchParams = new URLSearchParams();

  if (params?.page) searchParams.set("page", params.page.toString());
  if (params?.limit) searchParams.set("limit", params.limit.toString());
  if (params?.search) searchParams.set("search", params.search);
  if (params?.category_id)
    searchParams.set("category_id", params.category_id.toString());

  const queryString = searchParams.toString();
  const endpoint = `/blog-posts/published${queryString ? `?${queryString}` : ""}`;

  return fetchApi<ApiListResponse<BlogPostListItem>>(endpoint, {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });
}

/**
 * Get blog post detail by slug
 */
export async function getPostBySlug(
  slug: string
): Promise<ApiDetailResponse<BlogPostDetail>> {
  return fetchApi<ApiDetailResponse<BlogPostDetail>>(`/blog-posts/${slug}`, {
    next: { revalidate: 60 },
  });
}

/**
 * Get all published post slugs (for static generation)
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    // Fetch all published posts to get slugs
    const response = await getPublishedPosts({ limit: 100 });
    return response.data.map((post) => post.slug);
  } catch (error) {
    console.error("Failed to fetch post slugs:", error);
    return [];
  }
}

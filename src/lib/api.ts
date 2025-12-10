import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt?: string;
  category?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  content: string;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
    category: data.category,
    author: data.author || { name: "Nova Ardiansyah" },
    content: contentHtml,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith(".md"))
    .map((slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, slug);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        coverImage: data.coverImage,
        excerpt: data.excerpt,
        category: data.category,
        author: data.author || { name: "Nova Ardiansyah" },
        content: "", // We don't need full content for list view
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

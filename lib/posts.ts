import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "posts"); // adjust to your actual folder

export type Post = {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  categories: string[];
  content: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      categories: Array.isArray(data.categories)
        ? data.categories
        : data.categories
        ? [data.categories] // fallback if someone writes a single string
        : [],
      content,
    };
  });

  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) => p.categories.forEach((c) => set.add(c)));
  return Array.from(set).sort();
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) =>
    p.categories.some((c) => c.toLowerCase() === category.toLowerCase())
  );
}

export async function getPostHtml(content: string): Promise<string> {
  const processed = await remark().use(html).process(content);
  return processed.toString();
}
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostData = { date?: string; [key: string]: any };
export type Post = { slug: string; content: string; date?: string } & Record<string, any>;

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = path.parse(filename).name;
      const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data, content } = matter(file);
      // ensure computed slug cannot be overwritten by frontmatter
      return { ...(data as PostData), slug, content } as Post;
    });

  return posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date < b.date ? 1 : -1;
  });
}
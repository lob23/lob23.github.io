import Link from "next/link";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  return (
    <main className="section">
      <div className="section-head">
        <h1>{category}</h1>
        <span className="section-num">{posts.length} posts</span>
      </div>

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="post-row">
              <span className="post-date">{post.date ?? ""}</span>
              <div>
                <p className="post-title">{post.title ?? post.slug}</p>
                {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
              </div>
              <span className="post-arrow">↗</span>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/blog" className="back-link">
        ← All posts
      </Link>
    </main>
  );
}
// app/blog/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            {}
            <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
              {post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
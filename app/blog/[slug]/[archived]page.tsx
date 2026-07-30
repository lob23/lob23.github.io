import { getAllPosts } from '@/lib/posts';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 Await params here
  const posts = getAllPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <main>
      <a href="/blog">← Back to Blog</a>
      <article>
        <h1>{post.slug}</h1>
        {post.date && <p>{post.date}</p>}
        <div>{post.content}</div>
      </article>
    </main>
  );
}
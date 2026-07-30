import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="section">
        <p style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--ink-faint)" }}>
          Post not found.
        </p>
        <Link href="/blog" className="back-link">
          ← Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="section">
      <style>{`
        .back-link {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-soft);
          text-decoration: none;
          display: inline-block;
          margin-bottom: 40px;
        }
        .back-link:hover { color: var(--ink); }

        .post-header {
          border-bottom: 1px solid var(--rule);
          padding-bottom: 32px;
          margin-bottom: 40px;
        }
        .post-header h1 {
          font-family: var(--serif);
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
        }
        .post-meta {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-faint);
          margin: 0;
        }

        .post-body {
          font-family: var(--sans);
          font-size: 18px;
          line-height: 1.8;
          color: var(--ink-soft);
        }
        .post-body p { margin: 0 0 24px; }
        .post-body h2 {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 600;
          color: var(--ink);
          margin: 48px 0 16px;
        }
        .post-body h3 {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 600;
          color: var(--ink);
          margin: 36px 0 12px;
        }
        .post-body a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .post-body code {
          font-family: var(--mono);
          font-size: 0.9em;
          background: var(--paper-raised);
          border: 1px solid var(--rule);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .post-body pre {
          background: var(--paper-raised);
          border: 1px solid var(--rule);
          border-radius: 6px;
          padding: 20px;
          overflow-x: auto;
          font-family: var(--mono);
          font-size: 14px;
        }
        .post-body blockquote {
          border-left: 2px solid var(--accent);
          margin: 24px 0;
          padding-left: 20px;
          font-style: italic;
          color: var(--ink-soft);
        }
        .post-body img {
          max-width: 100%;
          border-radius: 6px;
          margin: 32px 0;
        }
      `}</style>

      <Link href="/blog" className="back-link">
        ← Back to blog
      </Link>

      <article>
        <header className="post-header">
          <h1>{post.title ?? post.slug}</h1>
          {post.date && <p className="post-meta">{post.date}</p>}
        </header>

        {/*
          If getAllPosts() returns pre-rendered HTML (e.g. from a markdown
          pipeline like remark/rehype), render it with dangerouslySetInnerHTML:

            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          If post.content is already plain text or JSX, keep the line below.
        */}
        <div className="post-body">{post.content}</div>
      </article>
    </main>
  );
}

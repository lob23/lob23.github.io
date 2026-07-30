import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="section">
      <style>{`
        .post-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--rule);
        }
        .post-row {
          display: grid;
          grid-template-columns: 110px 1fr auto;
          gap: 24px;
          align-items: baseline;
          padding: 26px 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          color: inherit;
          transition: background 0.2s ease;
        }
        .post-row:hover { background: rgba(138, 90, 59, 0.045); }
        .post-date {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-faint);
        }
        .post-title {
          font-size: 19px;
          font-weight: 500;
          margin: 0;
          color: var(--ink);
          font-family: var(--serif);
        }
        .post-excerpt {
          font-size: 14px;
          color: var(--ink-soft);
          margin: 6px 0 0;
        }
        .post-arrow {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-faint);
        }
        .empty-state {
          font-family: var(--mono);
          font-size: 14px;
          color: var(--ink-faint);
          padding: 40px 0;
        }
        @media (max-width: 640px) {
          .post-row { grid-template-columns: 1fr; gap: 6px; }
        }
        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }
        .category-filters a {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-soft);
          text-decoration: none;
          padding: 4px 10px;
          border: 1px solid var(--rule);
          border-radius: 999px;
        }
        .category-filters a:hover {
          color: var(--ink);
          border-color: var(--ink-faint);
        }
        .post-tags {
          display: flex;
          gap: 6px;
          margin-top: 6px;
        }
        .post-tag {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--ink-faint);
        }
      `}</style>

      <div className="section-head">
        <h1>Blog</h1>
        <span className="section-num">{posts.length} posts</span>
      </div>

      {categories.length > 0 && (
        <div className="category-filters">
          {categories.map((cat) => (
            <Link key={cat} href={`/blog/category/${encodeURIComponent(cat)}`}>
              {cat}
            </Link>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="empty-state">Nothing published yet — check back soon.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="post-row">
                <span className="post-date">{post.date ?? ""}</span>
                <div>
                  <p className="post-title">{post.title ?? post.slug}</p>
                  {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
                  {post.categories.length > 0 && (
                    <div className="post-tags">
                      {post.categories.map((c) => (
                        <span key={c} className="post-tag">#{c}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="post-arrow">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAME = "Long (Leon) Ho";

const NAV_ITEMS = [
  {label: "Education", href: "/#edu"},
  { label: "Work", href: "/#work" },
  { label: "Project and Publication", href: "/#project" },
  { label: "Blog", href: "/blog" },
  { label: "CV", href: "/cv.pdf" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="nav-mark">
        {NAME}
      </Link>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/blog"
              ? pathname?.startsWith("/blog")
              : pathname === item.href;
          return (
            <li key={item.label}>
              <Link href={item.href} className={isActive ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

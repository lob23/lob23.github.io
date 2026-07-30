"use client";

import React, { useState, useEffect } from "react";

const profile = {
  name: "Bao Long (Leon) Ho",
  role: "Cyber Security Analyst",
  location: "Ho Chi Minh City, Vietnam",
  tagline:
    "Security, Music, and Travel Enthusiast.",
  bio: `Hi, I’m Long, welcome to my page 👋

I hold a Bachelor’s degree in Computer Science from the University of Science, VNUHCM. I’m deeply interested in cybersecurity, particularly in security analysis, where I can gain hands-on experience in analyzing and responding to real-world security threats.

My goal is to combine a strong technical foundation with practical operational experience, ensuring that systems and products not only achieve their business objectives but are also resilient and secure from the ground up.`,
  avatarSrc: "/avatar.jpg",
  email: "hvblong23@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/lob23" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/long-ho-971852257/" },
  ],
  educations: [
    {
      year: "2021 - 2025",
      title: "Undergraduate, Advanced Program of Computer Science (APCS), University of Science, VNU-HCM",
      desc: "Grade: High Distinction",
    },
  ],
  experience: [
    {
      year: "2025",
      title: "Team member, Identity Oversight (National Australian Bank - Innovation Centre Vietnam)",
      desc: "Supporting external audit and internal audit for identity and access management, including reviewing and analyzing user access, permissions, and roles to ensure compliance with security policies and standards.",
    },
    {
      year: "2025",
      title: "Critical Infrastructure Cybersecurity Graduate Fellowship Program",
      desc: "Building PoC to demonstrate CVEs in the fields of IT and OT.",
    },
    {
      year: "2023",
      title: "Application Security Research (HCMUS Blackpinker)",
      desc: "Studying and examining mobile applications to understand and clarify data privacy practices.",
    },
  ],
  projects: [
    {
      year: "2025",
      title: "Bao-Long Ho, Tran-Tran Trinh, Minh-Triet Tran, and Anh-Duy Tran, “A Systematic Cross-Analysis of Privacy Risks in mHealth Android Applications in Vietnam”",
      desc: "Proceedings of the 18th International Conference on the Quality of Information and Communications Technology (QUATIC), Lisbon, Portugal, 2025."
    },
    {
      year: "2025",
      title: "Privacy Analysis of Vietnamese Financial and Medical Android Applications",
      desc: "Combining permission-based analysis and network traffic inspection to assess user privacy in Android financial and medical applications.",
    },
    {
      year: "2025",
      title: "Adversarial Attack Evaluation on YOLOv8",
      desc: "Evaluation of Black-Box and Transfer Attacks on the State-of-the-Art YOLOv8 Model.",
    },
  ],
};

function useScrollSpy() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export default function HomePage() {
  const scrolled = useScrollSpy();

  return (
    <div className="page">
      <style>{`
        :root {
          --paper: #F6F2EA;
          --paper-raised: #FBF8F2;
          --ink: #211F1C;
          --ink-soft: #59554D;
          --ink-faint: #948E80;
          --rule: rgba(33, 31, 28, 0.14);
          --rule-strong: rgba(33, 31, 28, 0.28);
          --accent: #8A5A3B;
          --accent-soft: #EFE1D2;
          --mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
          --serif: "Fraunces", "Iowan Old Style", Georgia, serif;
          --sans: "Inter", -apple-system, "Segoe UI", sans-serif;
        }

        * { box-sizing: border-box; }

        .page {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--sans);
          min-height: 100vh;
          width: 100%;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          background: rgba(246, 242, 234, 0.86);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, padding 0.3s ease;
        }
        .nav.scrolled {
          border-bottom: 1px solid var(--rule);
          padding: 14px 48px;
        }
        .nav-mark {
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.06em;
          color: var(--ink);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-mark::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          font-size: 14px;
          color: var(--ink-soft);
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
        }
        .nav-links a:hover { color: var(--ink); }
        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.25s ease;
        }
        .nav-links a:hover::after { transform: scaleX(1); transform-origin: left; }

        .nav-links a:focus-visible,
        .marquee a:focus-visible,
        .social-link:focus-visible,
        .cta:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* ---------- Hero ---------- */
        .hero {
          position: relative;
          padding: 88px 48px 0;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 64px;
          align-items: end;
          max-width: 1180px;
          margin: 0 auto;
        }

        .eyebrow {
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin: 0 0 20px;
        }

        .hero h1 {
          font-family: var(--serif);
          font-weight: 600;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.98;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          color: var(--ink);
        }

        .hero-role {
          font-size: 20px;
          color: var(--ink-soft);
          margin: 0 0 28px;
          max-width: 46ch;
        }

        .hero-tagline {
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 52ch;
          margin: 0 0 40px;
        }

        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .cta {
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          padding: 12px 22px;
          border-radius: 999px;
          border: 1px solid var(--ink);
          color: var(--ink);
          transition: background 0.2s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta.primary {
          background: var(--ink);
          color: var(--paper-raised);
        }
        .cta.primary:hover { background: var(--accent); border-color: var(--accent); }
        .cta.ghost:hover { background: var(--accent-soft); border-color: var(--accent); }

        /* Portrait frame */
        .portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 4px;
          border: 1px solid var(--rule-strong);
          background: var(--paper-raised);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .portrait-placeholder {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-faint);
          text-align: center;
          padding: 24px;
          letter-spacing: 0.04em;
        }
        .portrait-tag {
          position: absolute;
          bottom: 14px;
          left: 14px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          background: var(--paper);
          color: var(--ink-soft);
          padding: 4px 9px;
          border-radius: 999px;
          border: 1px solid var(--rule);
        }

        /* ---------- Marquee (signature element) ---------- */
        .marquee-wrap {
          margin-top: 72px;
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
          overflow: hidden;
          white-space: nowrap;
          padding: 22px 0;
        }
        .marquee-track {
          display: inline-flex;
          animation: scroll-left 26s linear infinite;
        }
        .marquee-track span {
          font-family: var(--serif);
          font-style: italic;
          font-size: 26px;
          color: var(--ink-faint);
          padding: 0 28px;
          white-space: nowrap;
        }
        .marquee-track span::after {
          content: "—";
          margin-left: 28px;
          color: var(--rule-strong);
          font-style: normal;
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }

        /* ---------- Sections ---------- */
        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 96px 48px;
        }
        .section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 48px;
          gap: 24px;
        }
        .section-head h2 {
          font-family: var(--serif);
          font-size: 34px;
          font-weight: 600;
          margin: 0;
        }
        .section-num {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-faint);
          letter-spacing: 0.08em;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 48px;
        }
        .about-label {
          font-family: var(--mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-faint);
          padding-top: 4px;
        }
        .about-body p {
          font-size: 18px;
          line-height: 1.8;
          color: var(--ink-soft);
          margin: 0;
          max-width: 62ch;
        }

        .highlights {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--rule);
        }
        .highlight {
          display: grid;
          grid-template-columns: 90px 1fr auto;
          gap: 24px;
          align-items: baseline;
          padding: 26px 0;
          border-bottom: 1px solid var(--rule);
          transition: background 0.2s ease;
        }
        .highlight:hover { background: rgba(138, 90, 59, 0.045); }
        .highlight-year {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-faint);
        }
        .highlight-title {
          font-size: 19px;
          font-weight: 500;
          margin: 0 0 6px;
          color: var(--ink);
        }
        .highlight-desc {
          font-size: 15px;
          color: var(--ink-soft);
          margin: 0;
        }
        .highlight-arrow {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-faint);
        }

        /* ---------- Contact / footer ---------- */
        .contact {
          background: var(--ink);
          color: var(--paper);
          border-radius: 4px;
          padding: 64px 56px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          flex-wrap: wrap;
        }
        .contact h2 {
          font-family: var(--serif);
          font-size: 40px;
          font-weight: 600;
          margin: 0 0 12px;
          max-width: 16ch;
        }
        .contact p {
          font-size: 15px;
          color: rgba(246, 242, 234, 0.6);
          margin: 0;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        .social-link {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--paper);
          text-decoration: none;
          opacity: 0.75;
        }
        .social-link:hover { opacity: 1; }

        footer {
          max-width: 1180px;
          margin: 0 auto;
          padding: 32px 48px 56px;
          display: flex;
          justify-content: space-between;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-faint);
        }

        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .portrait { max-width: 260px; }
          .about-grid { grid-template-columns: 1fr; gap: 16px; }
          .nav { padding: 16px 24px; }
          .section { padding: 64px 24px; }
          .hero { padding: 64px 24px 0; }
          .highlight { grid-template-columns: 1fr; gap: 6px; }
          .contact { padding: 40px 28px; flex-direction: column; align-items: flex-start; }
          .contact-links { align-items: flex-start; }
        }
      `}</style>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="cta-row">
              <a href="/cv.pdf" className="cta primary">View CV</a>
              <a href="/blog" className="cta ghost">Read the blog</a>
              <a href="#contact" className="cta ghost">Get in touch</a>
            </div>
          </div>

          <div className="portrait">
                <img src={profile.avatarSrc} alt={profile.name} />
                <span className="portrait-tag">{profile.role.split("/")[0].trim()}</span>
            </div>
        </div>

        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee-track">
            {Array(6).fill(null).map((_, i) => (
              <span key={i}>{profile.name} — {profile.role}</span>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-head">
          <h2>About</h2>
          <span className="section-num">01</span>
        </div>
        <div className="about-grid">
          <p className="about-label">Bio</p>
          <div className="about-body">
            <p>{profile.bio}</p>
          </div>
        </div>
      </section>

      {/* Edu */}
      <section className="section" id="edu">
        <div className="section-head">
          <h2>Education</h2>
          <span className="section-num">02</span>
        </div>
        <ul className="highlights">
          {profile.educations.map((h) => (
            <li className="highlight" key={h.title}>
              <span className="highlight-year">{h.year}</span>
              <div>
                <p className="highlight-title">{h.title}</p>
                <p className="highlight-desc">{h.desc}</p>
              </div>
              <span className="highlight-arrow">↗</span>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="work">
        <div className="section-head">
          <h2>Experience</h2>
          <span className="section-num">03</span>
        </div>
        <ul className="highlights">
          {profile.experience.map((h) => (
            <li className="highlight" key={h.title}>
              <span className="highlight-year">{h.year}</span>
              <div>
                <p className="highlight-title">{h.title}</p>
                <p className="highlight-desc">{h.desc}</p>
              </div>
              <span className="highlight-arrow">↗</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS & PUBLICATIONS */}
      <section className="section" id="project">
        <div className="section-head">
          <h2>Projects &amp; publications</h2>
          <span className="section-num">04</span>
        </div>
        <ul className="highlights">
          {profile.projects.map((h) => (
            <li className="highlight" key={h.title}>
              <span className="highlight-year">{h.year}</span>
              <div>
                <p className="highlight-title">{h.title}</p>
                <p className="highlight-desc">{h.desc}</p>
              </div>
              <span className="highlight-arrow">↗</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="contact">
          <div>
            <h2>Let's work together.</h2>
            <p>{profile.email}</p>
          </div>
          <div className="contact-links">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Hi there, I'm Leon. Nice to meet you.</span>
      </footer>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .navbar {
          background: #faf8f5;
          border-bottom: 1px solid #e8e0d5;
          position: sticky;
          top: 0;
          z-index: 50;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .navbar.scrolled {
          box-shadow: 0 2px 24px rgba(80, 20, 30, 0.08);
          background: rgba(250, 248, 245, 0.97);
          backdrop-filter: blur(8px);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
        }
        .brand-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: #1a0a0f;
          letter-spacing: 0.01em;
        }
        .brand-sub {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #8b5e52;
          margin-top: 3px;
        }
        .divider {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, transparent, #d4c4b5, transparent);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4a3728;
          text-decoration: none;
          padding: 0.45rem 1rem;
          border-radius: 2px;
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1.5px;
          background: #7a2535;
          transition: width 0.25s ease;
        }
        .nav-link:hover {
          color: #7a2535;
        }
        .nav-link:hover::after {
          width: calc(100% - 2rem);
        }
        .nav-link-cta {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #faf8f5;
          text-decoration: none;
          padding: 0.5rem 1.25rem;
          background: #7a2535;
          border-radius: 2px;
          margin-left: 0.5rem;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .nav-link-cta:hover {
          background: #5e1a27;
          transform: translateY(-1px);
        }
        .wine-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #7a2535;
          margin: 0 0.75rem;
          opacity: 0.5;
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="brand">
            <span className="brand-main">Westford Wine</span>
            <span className="brand-sub">&amp; Spirits — Est. 2013</span>
          </Link>

          <div className="divider" />

          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <span className="wine-dot" />
            <Link href="/products" className="nav-link">Products</Link>
            <span className="wine-dot" />
            <Link href="/deals" className="nav-link">Deals</Link>
            <Link href="/contact" className="nav-link-cta">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
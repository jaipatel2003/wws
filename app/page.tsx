import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featured = [
    { name: "Hennessy VS", tag: "Cognac", desc: "The world's best-selling Cognac. Rich and warming with notes of dried fruit, toasted oak, and a silky smooth finish." },
    { name: "Casamigos Blanco", tag: "Tequila", desc: "Ultra-premium tequila co-founded by George Clooney. Smooth and slightly sweet with hints of vanilla and citrus." },
    { name: "Johnnie Walker Black", tag: "Whiskey", desc: "A landmark Scotch aged at least 12 years. Deep, complex, and smoky with dark fruit and a lingering warmth." },
    { name: "Veuve Clicquot", tag: "Champagne", desc: "One of the great Champagne houses. Rich, toasty, and vibrant with notes of brioche, peach, and lemon zest." },
  ];

  const perks = [
    {
      title: "Huge Selection",
      desc: "Whiskey, vodka, tequila, rum, wine, craft beer, and more — curated to satisfy every palate.",
      icon: "🥃",
    },
    {
      title: "Weekly Deals",
      desc: "New discounts every week on top brands and customer favorites. Always worth checking in.",
      icon: "🔥",
    },
    {
      title: "Local & Convenient",
      desc: "Easy parking, fast checkout, and knowledgeable staff ready to help you find the right bottle.",
      icon: "📍",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#faf7f2", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        .hero-btn-primary { transition: background 0.2s; }
        .hero-btn-primary:hover { background: #a87820 !important; }
        .hero-btn-secondary { transition: background 0.2s, color 0.2s; }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.1) !important; }
        .perk-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .perk-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(42,31,20,0.1) !important; }
        .perk-card:hover .perk-bar { width: 100% !important; }
        .feat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .feat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(42,31,20,0.1) !important; }
        .feat-card:hover .feat-arrow { opacity: 1 !important; transform: translateX(3px) !important; }
        .cta-primary { transition: background 0.2s; }
        .cta-primary:hover { background: #a87820 !important; }
        .cta-secondary { transition: background 0.2s, color 0.2s; }
        .cta-secondary:hover { background: rgba(255,255,255,0.08) !important; }
        .pill-tag { transition: background 0.15s; }
        .pill-tag:hover { background: rgba(255,255,255,0.12) !important; }
        .browse-link:hover { text-decoration: underline; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        background: "#1a1208",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #2e2010",
      }}>
        {/* Texture lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.015) 39px, rgba(255,255,255,0.015) 40px)",
        }} />
        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: "-100px", left: "-80px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,146,42,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", right: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,146,42,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem 4.5rem", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>

            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                border: "1px solid rgba(200,146,42,0.3)",
                background: "rgba(200,146,42,0.08)",
                padding: "0.4rem 1rem", borderRadius: "2px",
                marginBottom: "1.5rem",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4caf50", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#c8b89a" }}>
                  Open Daily · Great Prices · Friendly Service
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
                fontWeight: 300, color: "#f0ebe0",
                lineHeight: 1.0, letterSpacing: "-0.02em",
                margin: "0 0 1.5rem",
              }}>
                Westford<br />
                <span style={{ color: "#c8922a" }}>Wine & Spirits</span>
              </h1>

              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#7a6a52", fontSize: "0.95rem", maxWidth: "420px",
                lineHeight: 1.8, letterSpacing: "0.02em", marginBottom: "2.5rem",
              }}>
                Premium beer, wine, whiskey, and spirits — with weekly deals and a selection that's always changing.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <Link href="/deals" className="hero-btn-primary" style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#0f0d0a", background: "#c8922a",
                  padding: "0.75rem 1.5rem", borderRadius: "3px",
                  textDecoration: "none", fontWeight: 500,
                }}>
                  View Weekly Deals
                </Link>
                <Link href="/contact" className="hero-btn-secondary" style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#c8b89a", border: "1px solid rgba(200,184,154,0.3)",
                  padding: "0.75rem 1.5rem", borderRadius: "3px",
                  textDecoration: "none", fontWeight: 400,
                }}>
                  Visit Us
                </Link>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["🥂 Wine", "🍺 Beer", "🥃 Whiskey", "🍸 Spirits"].map((label) => (
                  <span key={label} className="pill-tag" style={{
                    fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    color: "#c8b89a", border: "1px solid rgba(200,184,154,0.2)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "0.4rem 0.9rem", borderRadius: "2px",
                  }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: store image + stats */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: "-8px",
                borderRadius: "10px",
                background: "radial-gradient(circle at center, rgba(200,146,42,0.15) 0%, transparent 70%)",
                filter: "blur(24px)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "relative",
                borderRadius: "8px", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <Image
                  src="/store.webp"
                  alt="Westford Wine Storefront"
                  width={900}
                  height={500}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", marginTop: "1px", background: "rgba(255,255,255,0.06)" }}>
                {[
                  { stat: "500+", label: "Bottles" },
                  { stat: "Weekly", label: "Deals" },
                  { stat: "Fast", label: "Checkout" },
                ].map(({ stat, label }) => (
                  <div key={label} style={{
                    background: "#1a1208", padding: "1.1rem 0.75rem",
                    textAlign: "center",
                  }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 400, color: "#c8922a", margin: 0, lineHeight: 1 }}>
                      {stat}
                    </p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#7a6a52", margin: "0.3rem 0 0" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SHOP WITH US ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#faf7f2" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#c8922a", marginBottom: "0.5rem",
              }}>
                Our Promise
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300,
                color: "#1a1208", margin: 0, letterSpacing: "-0.01em",
              }}>
                Why shop with us?
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#a0907a", fontSize: "0.9rem", marginTop: "0.75rem", maxWidth: "420px", lineHeight: 1.7,
              }}>
                We keep the shelves stocked with top brands, rare finds, and customer favorites.
              </p>
            </div>
            <Link href="/products" className="browse-link" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#2a1f14", textDecoration: "none", fontWeight: 500,
            }}>
              Browse Products →
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5px",
            background: "#e4d8c8",
            border: "1px solid #e4d8c8",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
            {perks.map((p) => (
              <div key={p.title} className="perk-card" style={{
                background: "#fff", padding: "2.25rem 2rem",
              }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "10px",
                  background: "rgba(200,146,42,0.1)",
                  border: "1px solid rgba(200,146,42,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", marginBottom: "1.5rem",
                }}>
                  {p.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem", fontWeight: 400,
                  color: "#1a1208", margin: "0 0 0.75rem",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                  color: "#7a6a52", fontSize: "0.88rem", lineHeight: 1.75, margin: 0,
                }}>
                  {p.desc}
                </p>
                <div className="perk-bar" style={{
                  marginTop: "1.5rem", height: "1.5px",
                  width: 0, background: "#c8922a",
                  transition: "width 0.35s ease",
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PICKS ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#f5f0e8", borderTop: "1px solid #e4d8c8", borderBottom: "1px solid #e4d8c8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#c8922a", marginBottom: "0.5rem",
              }}>
                Always in Stock
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300,
                color: "#1a1208", margin: 0, letterSpacing: "-0.01em",
              }}>
                Featured Picks
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#a0907a", fontSize: "0.9rem", marginTop: "0.75rem", lineHeight: 1.7,
              }}>
                Customer favorites that are usually in stock.
              </p>
            </div>
            <Link href="/deals" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0d0a", background: "#c8922a",
              padding: "0.65rem 1.4rem", borderRadius: "3px",
              textDecoration: "none", fontWeight: 500,
            }}>
              See Deals
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5px",
            background: "#e4d8c8",
            border: "1px solid #e4d8c8",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
            {featured.map((item) => (
              <div key={item.name} className="feat-card" style={{
                background: "#fff", padding: "2rem",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#c8922a", border: "1px solid rgba(200,146,42,0.4)",
                    background: "rgba(200,146,42,0.08)",
                    padding: "0.2rem 0.6rem", borderRadius: "2px",
                  }}>
                    {item.tag}
                  </span>
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                    letterSpacing: "0.1em", color: "#b0a090",
                  }}>
                    In Stock
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem", fontWeight: 400,
                  color: "#1a1208", margin: "0 0 0.75rem", lineHeight: 1.15,
                }}>
                  {item.name}
                </h3>

                <p style={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                  color: "#7a6a52", fontSize: "0.82rem", lineHeight: 1.75,
                  flex: 1, margin: "0 0 1.5rem",
                }}>
                  {item.desc}
                </p>

                <div style={{ height: "1px", background: "#ede8e0", marginBottom: "1.25rem" }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#a0907a",
                  }}>
                    Ask in-store for pricing
                  </span>
                  <span className="feat-arrow" style={{
                    color: "#c8922a", fontSize: "1rem",
                    opacity: 0, transition: "opacity 0.2s, transform 0.2s",
                  }}>
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/products" className="browse-link" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#2a1f14", textDecoration: "none", fontWeight: 500,
            }}>
              Browse all products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#1a1208", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,146,42,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.015) 39px, rgba(255,255,255,0.015) 40px)",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{
            border: "1px solid rgba(200,146,42,0.2)",
            background: "rgba(200,146,42,0.05)",
            borderRadius: "8px",
            padding: "3.5rem 2.5rem",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: "2.5rem",
          }}>
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#c8922a", marginBottom: "0.5rem",
              }}>
                We're Here to Help
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300,
                color: "#f0ebe0", margin: "0 0 0.75rem", lineHeight: 1.1,
              }}>
                Need something specific?
              </h3>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#7a6a52", fontSize: "0.9rem", maxWidth: "440px", lineHeight: 1.75,
              }}>
                Looking for a rare bottle or a specific brand? Call us and we'll check inventory or help you track it down.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="cta-primary" style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#0f0d0a", background: "#c8922a",
                padding: "0.8rem 1.5rem", borderRadius: "3px",
                textDecoration: "none", fontWeight: 500,
              }}>
                Contact Us
              </Link>
              <Link href="/products" className="cta-secondary" style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#c8b89a", border: "1px solid rgba(200,184,154,0.25)",
                padding: "0.8rem 1.5rem", borderRadius: "3px",
                textDecoration: "none", fontWeight: 400,
              }}>
                View Products
              </Link>
            </div>
          </div>

          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
            color: "#4a3a28", textAlign: "center", marginTop: "3rem",
            letterSpacing: "0.06em",
          }}>
            © {new Date().getFullYear()} Westford Wine & Spirits. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
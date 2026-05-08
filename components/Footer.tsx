export default function Footer() {
    return (
      <footer style={{
        background: "#1a1208",
        borderTop: "1px solid #2e2010",
        position: "relative",
        overflow: "hidden",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
          .footer-link { transition: color 0.2s; }
          .footer-link:hover { color: #c8922a !important; }
        `}</style>
  
        {/* Subtle texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.015) 39px, rgba(255,255,255,0.015) 40px)",
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", bottom: "-60px", right: "-60px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,146,42,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
  
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3.5rem 1.5rem 2rem", position: "relative" }}>
  
          {/* Main row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
  
            {/* Brand */}
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#c8922a", marginBottom: "0.5rem",
              }}>
                Est. 2013
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem", fontWeight: 400,
                color: "#f0ebe0", margin: "0 0 0.75rem", lineHeight: 1.1,
              }}>
                Westford Wine<br />& Spirits
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#b8a898", fontSize: "0.82rem", lineHeight: 1.7,
              }}>
                Serving the community with quality spirits, wine, and beer since 2013.
              </p>
            </div>
  
            {/* Quick Info */}
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#a89878", marginBottom: "1rem",
              }}>
                Find Us
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#c8b8a8", fontSize: "0.85rem", lineHeight: 1.75, margin: "0 0 0.5rem",
              }}>
                9 Cornerstone Square<br />Westford, MA 01886
              </p>
              <a href="tel:+19786929161" className="footer-link" style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.85rem",
                color: "#c8b8a8", textDecoration: "none", display: "block",
              }}>
                (978) 692-9161
              </a>
              <a href="mailto:westfordwine@gmail.com" className="footer-link" style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.85rem",
                color: "#c8b8a8", textDecoration: "none", display: "block", marginTop: "0.25rem",
              }}>
                westfordwine@gmail.com
              </a>
            </div>
  
            {/* Hours */}
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#a89878", marginBottom: "1rem",
              }}>
                Hours
              </p>
              {[
                { days: "Mon – Sat", hours: "8:00 AM – 9:00 PM" },
                { days: "Sunday", hours: "10:00 AM – 8:00 PM" },
              ].map(({ days, hours }) => (
                <div key={days} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#b8a898" }}>{days}</span>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#c8b8a8" }}>{hours}</span>
                </div>
              ))}
            </div>
  
            {/* Legal */}
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#a89878", marginBottom: "1rem",
              }}>
                Legal
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#b8a898", fontSize: "0.8rem", lineHeight: 1.7,
              }}>
                Must be 21+ to purchase alcohol. Please drink responsibly.
              </p>
            </div>
          </div>
  
          {/* Bottom bar */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: "1rem", paddingTop: "1.5rem",
          }}>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
              color: "#7a6a58", letterSpacing: "0.06em",
            }}>
              © {new Date().getFullYear()} Westford Wine & Spirits. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[
                { label: "Products", href: "/products" },
                { label: "Deals", href: "/deals" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="footer-link" style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#9a8a78", textDecoration: "none",
                }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
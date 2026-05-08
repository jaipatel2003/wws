export default function ContactPage() {
    return (
      <div style={{ minHeight: "100vh", background: "#faf7f2", fontFamily: "'Georgia', serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
          .contact-btn-primary { transition: background 0.2s; }
          .contact-btn-primary:hover { background: #a87820 !important; }
          .contact-btn-secondary { transition: background 0.2s, border-color 0.2s; }
          .contact-btn-secondary:hover { background: rgba(255,255,255,0.06) !important; }
          .contact-info-row { transition: background 0.15s; }
          .contact-info-row:hover { background: rgba(200,146,42,0.04) !important; }
          .cta-call { transition: background 0.2s; }
          .cta-call:hover { background: #a87820 !important; }
          .hours-row { border-bottom: 1px solid rgba(255,255,255,0.05); }
          .hours-row:last-child { border-bottom: none; }
        `}</style>
  
        {/* ── Hero Banner ── */}
        <div style={{
          background: "#1a1208",
          borderBottom: "1px solid #2e2010",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-80px", right: "-60px",
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,146,42,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.015) 39px, rgba(255,255,255,0.015) 40px)",
          }} />
  
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem 3.5rem", position: "relative" }}>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
              letterSpacing: "0.28em", textTransform: "uppercase",
              color: "#c8922a", marginBottom: "0.75rem",
            }}>
              Westford Wine & Spirits
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              fontWeight: 300, color: "#f0ebe0",
              lineHeight: 1, letterSpacing: "-0.02em",
              margin: "0 0 1.25rem",
            }}>
              Visit Us
            </h1>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              color: "#7a6a52", fontSize: "0.95rem", maxWidth: "420px",
              lineHeight: 1.7, letterSpacing: "0.02em",
            }}>
              Stop in anytime, or reach out for availability, special orders, and pricing.
            </p>
          </div>
        </div>
  
        {/* ── Main Content ── */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5px",
            background: "#e4d8c8",
            border: "1px solid #e4d8c8",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
  
            {/* ── Store Info Panel ── */}
            <div style={{ background: "#fff", padding: "2.5rem" }}>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#c8922a", marginBottom: "0.5rem",
              }}>
                Find Us
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem", fontWeight: 400,
                color: "#1a1208", margin: "0 0 2rem", letterSpacing: "0.01em",
              }}>
                Store Information
              </h2>
  
              {/* Info rows */}
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: "9 Cornerstone Square\nWestford, MA 01886",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "(978) 692-9161",
                  href: "tel:+19786929161",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "westfordwine@gmail.com",
                  href: "mailto:westfordwine@gmail.com",
                },
              ].map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="contact-info-row"
                  style={{
                    display: "flex", gap: "1rem",
                    padding: "1rem 0.75rem",
                    borderRadius: "4px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>{icon}</span>
                  <div>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "#b0a090", margin: "0 0 0.2rem",
                    }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{
                        fontFamily: "'Jost', sans-serif", fontSize: "0.92rem",
                        color: "#2a1f14", textDecoration: "none",
                        fontWeight: 400, whiteSpace: "pre-line",
                      }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{
                        fontFamily: "'Jost', sans-serif", fontSize: "0.92rem",
                        color: "#2a1f14", margin: 0, whiteSpace: "pre-line",
                      }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
  
              {/* Hours */}
              <div style={{
                marginTop: "2rem",
                padding: "1.5rem",
                background: "#faf7f2",
                border: "1px solid #ede8e0",
                borderRadius: "6px",
              }}>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#c8922a", marginBottom: "1rem",
                }}>
                  Hours
                </p>
                {[
                  { days: "Monday – Saturday", hours: "8:00 AM – 9:00 PM" },
                  { days: "Sunday", hours: "10:00 AM – 8:00 PM" },
                ].map(({ days, hours }) => (
                  <div
                    key={days}
                    className="hours-row"
                    style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "baseline", padding: "0.6rem 0",
                    }}
                  >
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#5a4a38" }}>
                      {days}
                    </span>
                    <span style={{
                      fontFamily: "'Jost', sans-serif", fontSize: "0.85rem",
                      color: "#2a1f14", fontWeight: 500, letterSpacing: "0.02em",
                    }}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
  
              {/* Action buttons */}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
                <a
                  href="tel:+19786929161"
                  className="contact-btn-primary"
                  style={{
                    flex: 1, textAlign: "center",
                    fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#0f0d0a", background: "#c8922a",
                    padding: "0.75rem 1rem", borderRadius: "4px",
                    textDecoration: "none", fontWeight: 500,
                    minWidth: "120px",
                  }}
                >
                  Call Now
                </a>
                <a
                  href="mailto:westfordwine@gmail.com"
                  className="contact-btn-secondary"
                  style={{
                    flex: 1, textAlign: "center",
                    fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#5a4a38", border: "1px solid #ddd0bc",
                    padding: "0.75rem 1rem", borderRadius: "4px",
                    textDecoration: "none", fontWeight: 400,
                    minWidth: "120px", background: "transparent",
                  }}
                >
                  Email Us
                </a>
              </div>
            </div>
  
            {/* ── Map Panel ── */}
            <div style={{ background: "#fff", display: "flex", flexDirection: "column", minHeight: "480px" }}>
              <div style={{ padding: "2rem 2rem 1.25rem", borderBottom: "1px solid #ede8e0" }}>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "#c8922a", marginBottom: "0.4rem",
                }}>
                  Location
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem", fontWeight: 400,
                  color: "#1a1208", margin: 0,
                }}>
                  Find Us Here
                </h2>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.78rem",
                  color: "#a0907a", marginTop: "0.3rem",
                }}>
                  Conveniently located in Westford, MA
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4894247122515!2d-71.43069002321229!3d42.56562337117454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e397d56b668eeb%3A0x640567b57c612984!2s9%20Cornerstone%20Square%2C%20Westford%2C%20MA%2001886!5e1!3m2!1sen!2sus!4v1777943194941!5m2!1sen!2sus"
                  style={{ width: "100%", height: "100%", minHeight: "360px", border: "none", display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
  
          {/* ── Bottom Banner ── */}
          <div style={{
            marginTop: "4rem",
            background: "#1a1208",
            borderRadius: "8px",
            padding: "3rem 2.5rem",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: "2rem",
            position: "relative", overflow: "hidden",
            textAlign: "left",
          }}>
            <div style={{
              position: "absolute", top: "-60px", right: "-60px",
              width: "300px", height: "300px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,146,42,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#c8922a", marginBottom: "0.5rem",
              }}>
                Special Orders Welcome
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 300,
                color: "#f0ebe0", margin: "0 0 0.75rem", lineHeight: 1.1,
              }}>
                Looking for something specific?
              </h3>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                color: "#7a6a52", fontSize: "0.88rem", maxWidth: "400px", lineHeight: 1.7,
              }}>
                Call us — we can check availability or place a special order for you.
              </p>
            </div>
            <a
              href="tel:+19786929161"
              className="cta-call"
              style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.8rem",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#0f0d0a", background: "#c8922a",
                padding: "0.9rem 2rem", borderRadius: "4px",
                textDecoration: "none", fontWeight: 500,
                position: "relative", whiteSpace: "nowrap",
              }}
            >
              Call (978) 692-9161
            </a>
          </div>
  
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
            color: "#c0b0a0", textAlign: "center", marginTop: "2rem",
            letterSpacing: "0.06em",
          }}>
            * Hours may vary on holidays. Call ahead to confirm.
          </p>
        </div>
      </div>
    );
  }
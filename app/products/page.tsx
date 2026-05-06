"use client";

import { useMemo, useState } from "react";

// --- Data ---

type Product = {
  name: string;
  description: string;
  origin: string;
  style: string;
};

type Category = {
  category: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  items: Product[];
};

const products: Category[] = [
  {
    category: "Whiskey",
    tagline: "Aged to perfection.",
    description: "Smooth, bold, and aged classics.",
    icon: "🥃",
    accentColor: "#c8922a",
    items: [
      { name: "Jameson", description: "A triple-distilled Irish whiskey with a signature smoothness, featuring notes of vanilla, toasted wood, and spice.", origin: "Ireland", style: "Blended Irish" },
      { name: "Buffalo Trace", description: "A deep amber Kentucky bourbon with complex aromas of vanilla, mint, and molasses. Rich and full-bodied.", origin: "Kentucky, USA", style: "Straight Bourbon" },
      { name: "Woodford Reserve", description: "A small-batch bourbon with a rich, full body and a long, smooth finish. Notes of dried fruit, vanilla, and toasted oak.", origin: "Kentucky, USA", style: "Small Batch Bourbon" },
      { name: "Maker's Mark", description: "Handcrafted in small batches with winter wheat instead of rye, producing a sweeter, softer profile with caramel and fruit notes.", origin: "Kentucky, USA", style: "Wheated Bourbon" },
      { name: "Knob Creek", description: "A robust, full-proof bourbon aged nine years for a bold, oaky depth with maple syrup sweetness and a lingering finish.", origin: "Kentucky, USA", style: "Straight Bourbon" },
    ],
  },
  {
    category: "Vodka",
    tagline: "Pure. Clean. Versatile.",
    description: "Clean spirits for cocktails or straight.",
    icon: "🍸",
    accentColor: "#7eb8d4",
    items: [
      { name: "Tito's", description: "An American craft vodka distilled from corn, yielding a clean, slightly sweet profile with a silky mouthfeel. Perfect for any cocktail.", origin: "Texas, USA", style: "Corn Vodka" },
      { name: "Grey Goose", description: "A French luxury vodka made from premium soft winter wheat, offering an exceptionally smooth taste with subtle citrus and almond notes.", origin: "Cognac, France", style: "Wheat Vodka" },
      { name: "Cîroc", description: "Unlike most vodkas, Cîroc is distilled from fine French grapes, giving it a distinctly fresh, fruity character with a crisp, clean finish.", origin: "France", style: "Grape Vodka" },
      { name: "Ketel One", description: "A Dutch classic crafted from 100% non-GMO wheat, distilled in copper pot stills for a fresh, crisp taste with a long, creamy finish.", origin: "Netherlands", style: "Wheat Vodka" },
      { name: "Absolut", description: "A Swedish icon made from winter wheat, featuring a rich, full-bodied taste with a distinct character of grain, dried fruit, and subtle hints of pepper.", origin: "Åhus, Sweden", style: "Wheat Vodka" },
    ],
  },
  {
    category: "Tequila",
    tagline: "From the blue agave fields.",
    description: "From blanco to añejo favorites.",
    icon: "🌵",
    accentColor: "#7ab87a",
    items: [
      { name: "Don Julio", description: "Crafted in the highlands of Jalisco, Don Julio Blanco is the original choice of Don Julio González. Crisp and fresh with citrus and floral notes.", origin: "Jalisco, Mexico", style: "Blanco" },
      { name: "Patrón", description: "A benchmark premium tequila made from the finest 100% Weber Blue Agave. Light and smooth with a sweet, fruity agave flavor and a hint of pepper.", origin: "Jalisco, Mexico", style: "Silver" },
      { name: "Casamigos", description: "Co-founded by George Clooney, this ultra-premium tequila features a smooth, slightly sweet taste with hints of vanilla, caramel, and a long finish.", origin: "Jalisco, Mexico", style: "Blanco" },
      { name: "Espolòn", description: "A bold, handcrafted tequila from the Highlands of Jalisco with a well-rounded agave flavor, complemented by notes of citrus and white pepper.", origin: "Jalisco, Mexico", style: "Blanco" },
      { name: "1800", description: "Named after the first year tequila was aged in oak barrels, 1800 Silver is crystal clear with fresh agave, citrus, and a smooth, warm finish.", origin: "Jalisco, Mexico", style: "Silver" },
    ],
  },
  {
    category: "Wine",
    tagline: "Uncork the moment.",
    description: "Reds, whites, rosés, and bubbly.",
    icon: "🍷",
    accentColor: "#a0324a",
    items: [
      { name: "Josh Cabernet", description: "A rich and robust California Cabernet Sauvignon with aromas of blackberry, dark chocolate, and hints of mocha. Velvety smooth with a long finish.", origin: "California, USA", style: "Cabernet Sauvignon" },
      { name: "Kendall-Jackson", description: "The best-selling Chardonnay in the United States. A full-bodied white with tropical fruit flavors, vanilla, and a hint of oak from barrel aging.", origin: "California, USA", style: "Chardonnay" },
      { name: "Barefoot", description: "America's most awarded wine brand. Approachable and fruit-forward with multiple varietals, perfect for casual gatherings and celebrations alike.", origin: "California, USA", style: "Various" },
      { name: "La Marca Prosecco", description: "An Italian sparkling wine bursting with flavors of honey, cream, and fresh peach. Bright, crisp bubbles make it perfect for any celebration.", origin: "Veneto, Italy", style: "Prosecco DOC" },
      { name: "Oyster Bay", description: "A crisp and vibrant New Zealand Sauvignon Blanc with intense aromas of passionfruit, citrus, and fresh herbs, finishing with a clean, refreshing acidity.", origin: "Marlborough, NZ", style: "Sauvignon Blanc" },
    ],
  },
  {
    category: "Beer",
    tagline: "Domestic, imported & craft.",
    description: "Domestic, imported, and craft picks.",
    icon: "🍺",
    accentColor: "#c8a04a",
    items: [
      { name: "Corona", description: "Mexico's most iconic export. A light, crisp lager with a faint malt sweetness and a hint of hop bitterness. Best served ice cold with a wedge of lime.", origin: "Mexico City, Mexico", style: "Pale Lager" },
      { name: "Modelo", description: "A full-flavored pilsner-style beer, rich in flavor with a slightly sweet, well-balanced taste and a clean finish. A staple at any gathering.", origin: "Mexico City, Mexico", style: "Pilsner" },
      { name: "Heineken", description: "The world-renowned Dutch lager with a distinctive malty aroma and a slightly bitter finish. Brewed with pure malt and hops since 1873.", origin: "Amsterdam, Netherlands", style: "Pale Lager" },
      { name: "Bud Light", description: "America's best-selling beer. An easy-drinking, light-bodied lager with a clean, refreshing taste and subtle hops bitterness.", origin: "St. Louis, USA", style: "Light Lager" },
      { name: "Sam Adams", description: "A New England classic. The flagship Boston Lager features a smooth, full-bodied flavor with a balance of slightly sweet malt and noble hops.", origin: "Boston, USA", style: "Vienna Lager" },
    ],
  },
  {
    category: "Rum",
    tagline: "Sweet, spiced & tropical.",
    description: "Sweet, spiced, and tropical staples.",
    icon: "🏝️",
    accentColor: "#d47c4a",
    items: [
      { name: "Bacardi", description: "The world's best-selling rum. A light-bodied, dry white rum with subtle notes of vanilla and almond. The foundation of the classic Mojito and Daiquiri.", origin: "Bermuda", style: "White Rum" },
      { name: "Captain Morgan", description: "A beloved spiced rum with the signature warmth of vanilla, caramel, and island spices. Perfect over ice or in a classic rum & cola.", origin: "Jamaica", style: "Spiced Rum" },
      { name: "Malibu", description: "A Caribbean coconut rum liqueur with a sweet, tropical taste and a smooth, velvety texture. The spirit of summer in every sip.", origin: "Caribbean", style: "Coconut Rum" },
      { name: "Kraken", description: "Named after the legendary sea monster, this dark spiced rum is bold, rich, and mysterious with notes of coffee, toffee, cinnamon, and vanilla.", origin: "Trinidad", style: "Black Spiced Rum" },
      { name: "Diplomático", description: "An award-winning Venezuelan rum aged up to 12 years in bourbon and sherry casks, producing an incredibly complex, rich profile of chocolate and dried fruit.", origin: "Venezuela", style: "Aged Dark Rum" },
    ],
  },
];

// --- Category Detail Page ---

function CategoryDetail({ cat, onBack }: { cat: Category; onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d", fontFamily: "'Georgia', serif" }}>
      {/* Header Band */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #111 0%, #1a1a1a 60%, ${cat.accentColor}22 100%)`,
          borderBottom: `1px solid ${cat.accentColor}44`,
        }}
      >
        {/* Decorative large icon watermark */}
        <div
          style={{
            position: "absolute",
            right: "-2rem",
            top: "-2rem",
            fontSize: "18rem",
            opacity: 0.04,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {cat.icon}
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14 relative">
          <button
            onClick={onBack}
            style={{
              color: cat.accentColor,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Georgia', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "2.5rem",
              opacity: 0.8,
              padding: 0,
            }}
          >
            ← Back to All Products
          </button>

          <div className="flex items-start gap-5">
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "16px",
                background: `${cat.accentColor}18`,
                border: `1px solid ${cat.accentColor}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.2rem",
                flexShrink: 0,
              }}
            >
              {cat.icon}
            </div>
            <div>
              <p
                style={{
                  color: cat.accentColor,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Our Selection
              </p>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4rem)",
                  fontWeight: 800,
                  color: "#f5f0e8",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                {cat.category}
              </h1>
              <p style={{ color: "#888", fontSize: "1.05rem", fontStyle: "italic" }}>
                {cat.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Item List */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div
          style={{
            display: "grid",
            gap: "1px",
            background: "#1e1e1e",
            border: "1px solid #1e1e1e",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {cat.items.map((item, i) => (
            <div
              key={item.name}
              style={{
                background: "#111",
                padding: "2rem 2.5rem",
                display: "grid",
                gridTemplateColumns: "2.5rem 1fr auto",
                gap: "1.5rem",
                alignItems: "start",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#161616")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "#111")
              }
            >
              {/* Index */}
              <div
                style={{
                  fontSize: "0.75rem",
                  color: cat.accentColor,
                  opacity: 0.6,
                  fontVariantNumeric: "tabular-nums",
                  paddingTop: "0.3rem",
                  letterSpacing: "0.05em",
                  fontFamily: "monospace",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div>
                <h2
                  style={{
                    color: "#f5f0e8",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.name}
                </h2>
                <p
                  style={{
                    color: "#999",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    maxWidth: "55ch",
                    fontStyle: "italic",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Meta tags */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.4rem",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: cat.accentColor,
                    background: `${cat.accentColor}14`,
                    border: `1px solid ${cat.accentColor}30`,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.style}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    color: "#555",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.origin}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.75rem 2rem",
            borderRadius: "16px",
            background: "#141414",
            border: "1px solid #222",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "#666", fontSize: "0.9rem", fontStyle: "italic" }}>
            Don't see what you're looking for? We can special order many bottles.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href="/contact"
              style={{
                padding: "0.6rem 1.25rem",
                borderRadius: "10px",
                background: cat.accentColor,
                color: "#0d0d0d",
                fontWeight: 700,
                fontSize: "0.85rem",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Request a Bottle
            </a>
            <a
              href="tel:+1XXXXXXXXXX"
              style={{
                padding: "0.6rem 1.25rem",
                borderRadius: "10px",
                border: "1px solid #333",
                color: "#aaa",
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Products Page ---

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState<Category | null>(null);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    const term = searchTerm.toLowerCase();
    return products
      .map((cat) => {
        const categoryMatch =
          cat.category.toLowerCase().includes(term) ||
          cat.description.toLowerCase().includes(term);
        const filteredItems = cat.items.filter((item) =>
          item.name.toLowerCase().includes(term)
        );
        if (categoryMatch) return cat;
        if (filteredItems.length > 0) return { ...cat, items: filteredItems };
        return null;
      })
      .filter(Boolean) as Category[];
  }, [searchTerm]);

  // All hooks are above — safe to conditionally return now
  if (activeCat) {
    return <CategoryDetail cat={activeCat} onBack={() => setActiveCat(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto pt-16 pb-10 px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our Products
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Browse a sample of what we carry in-store. Inventory changes often —
              call us anytime if you're looking for something specific.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+1XXXXXXXXXX"
              className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-md hover:bg-gray-800 transition"
            >
              Call Store
            </a>
            <a
              href="/contact"
              className="px-5 py-3 rounded-xl border border-gray-300 bg-white font-semibold text-gray-900 shadow-sm hover:border-gray-400 hover:bg-gray-50 transition"
            >
              Request a Product
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by category or product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 pr-12 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </div>
          </div>
          {searchTerm.trim() && (
            <p className="mt-3 text-sm text-gray-500">
              Showing results for: <span className="font-semibold">{searchTerm}</span>
            </p>
          )}
        </div>

        {/* Quick Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Top Sellers", "New Arrivals", "Local Craft", "Gift Bottles", "Party Packs"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 cursor-pointer transition"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto pb-20 px-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900">No products found</h2>
            <p className="mt-2 text-gray-600">Try searching for something else.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-6 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((cat) => (
              <div
                key={cat.category}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                        {cat.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{cat.category}</h2>
                        <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">
                      {cat.items.length} items
                    </span>
                  </div>

                  <div className="mt-6">
                    <ul className="space-y-2 text-gray-700">
                      {cat.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-50 border border-gray-100 hover:bg-gray-100 transition"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-400">→</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setActiveCat(cat)}
                    className="mt-6 w-full rounded-xl bg-gray-900 text-white py-3 font-semibold hover:bg-gray-800 transition"
                  >
                    View More {cat.category}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Callout */}
        <div className="mt-16 rounded-3xl border border-gray-200 bg-gradient-to-r from-gray-900 to-gray-800 px-10 py-12 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-3xl font-extrabold">Looking for something rare?</h3>
              <p className="mt-3 text-gray-200 max-w-2xl">
                We can special order many bottles depending on availability. Call or send a
                request and we'll help you find it.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white text-gray-900 font-bold shadow hover:bg-gray-100 transition"
              >
                Send Request
              </a>
              <a
                href="tel:+1XXXXXXXXXX"
                className="px-6 py-3 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          * Product selection may vary by season and availability.
        </p>
      </div>
    </div>
  );
}
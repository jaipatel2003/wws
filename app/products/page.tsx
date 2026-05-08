"use client";

import { useEffect, useMemo, useState } from "react";

// --- Data (unchanged) ---

type Product = {
  name: string;
  description: string;
  origin: string;
  style: string;
};

type Subcategory = {
  label: string;
  icon: string;
  items: Product[];
};

type Category = {
  category: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  items: Product[];
  subcategories?: Subcategory[];
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
      { name: "Belvedere", description: "Poland's first luxury vodka, crafted from Dankowskie Diamond Rye and artesian water. Velvety smooth with a natural vanilla sweetness and a clean, warming finish.", origin: "Żyrardów, Poland", style: "Rye Vodka" },
      { name: "Svedka", description: "A Swedish vodka distilled five times from winter wheat, delivering a crisp, clean taste with a light citrus note. One of the best values in the category.", origin: "Sweden", style: "Wheat Vodka" },
      { name: "Smirnoff", description: "The world's most recognized vodka. Triple distilled and ten times filtered for a classic, clean profile that's endlessly versatile in cocktails or on the rocks.", origin: "USA", style: "Grain Vodka" },
      { name: "Skyy", description: "An American vodka quadruple distilled and triple filtered through California limestone, producing an exceptionally clean spirit with a soft, subtle sweetness.", origin: "California, USA", style: "Grain Vodka" },
      { name: "New Amsterdam", description: "Five times distilled from American grain and filtered three times for a remarkably smooth finish. Slightly sweet with a clean, crisp character that works in any mix.", origin: "California, USA", style: "Grain Vodka" },
      { name: "Stolichnaya", description: "A storied Russian-style vodka made from wheat and rye, blended with artesian well water. Classic, slightly grainy character with a clean, slightly sweet finish.", origin: "Latvia", style: "Wheat & Rye Vodka" },
      { name: "Russian Standard", description: "Made from winter wheat grown in the Russian steppes and glacial water from Lake Ladoga. Smooth, slightly sweet, and unmistakably Russian in character.", origin: "St. Petersburg, Russia", style: "Wheat Vodka" },
      { name: "Pinnacle", description: "A French-made vodka distilled five times in the Cognac region, offering a clean, light-bodied profile at an everyday price point. Popular across a wide range of flavors.", origin: "Cognac, France", style: "Wheat Vodka" },
      { name: "UV Vodka", description: "A quadruple-distilled grain vodka made in Minnesota with a noticeably smooth, neutral profile. Widely available in a massive range of flavors for cocktail creativity.", origin: "Minnesota, USA", style: "Grain Vodka" },
      { name: "Wheatley", description: "Crafted at the historic Buffalo Trace Distillery using a micro-batch process and 10-column distillation. Light, clean, and slightly floral — a craft spirit at an accessible price.", origin: "Kentucky, USA", style: "Wheat Vodka" },
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
      { name: "Kendall-Jackson Chardonnay", description: "The best-selling Chardonnay in the United States. Full-bodied with tropical fruit flavors, vanilla, and a hint of oak from barrel aging.", origin: "California, USA", style: "Chardonnay" },
      { name: "Oyster Bay Sauvignon Blanc", description: "A crisp and vibrant New Zealand white with intense aromas of passionfruit, citrus, and fresh herbs, finishing with a clean, refreshing acidity.", origin: "Marlborough, NZ", style: "Sauvignon Blanc" },
      { name: "Santa Margherita Pinot Grigio", description: "Italy's benchmark Pinot Grigio. Clean and dry with a golden straw color, and a bouquet of golden apple and citrus. Crisp and refreshing on the palate.", origin: "Alto Adige, Italy", style: "Pinot Grigio" },
      { name: "La Marca Prosecco", description: "An Italian sparkling wine bursting with flavors of honey, cream, and fresh peach. Bright, crisp bubbles make it perfect for any celebration.", origin: "Veneto, Italy", style: "Prosecco" },
    ],
    subcategories: [
      {
        label: "Cabernet Sauvignon",
        icon: "🍇",
        items: [
          { name: "Josh Cellars", description: "A rich California Cab with aromas of blackberry, dark chocolate, and mocha. Velvety tannins and a long, satisfying finish.", origin: "California, USA", style: "Cabernet Sauvignon" },
          { name: "Caymus", description: "One of Napa Valley's most celebrated Cabernets. Deep, opulent, and lush with ripe black cherry, cocoa, and a signature plush texture.", origin: "Napa Valley, USA", style: "Cabernet Sauvignon" },
          { name: "14 Hands", description: "A crowd-pleasing Washington State Cab with ripe plum, blackcurrant, and a touch of cedar. Medium-bodied and approachable.", origin: "Washington, USA", style: "Cabernet Sauvignon" },
          { name: "Beringer", description: "A classic California Cabernet with notes of black cherry, mocha, and toasted oak. Balanced tannins make it great for both everyday drinking and special occasions.", origin: "Napa Valley, USA", style: "Cabernet Sauvignon" },
          { name: "Stag's Leap", description: "A legendary Napa Cabernet known for its silky elegance. Deep ruby color with aromas of black plum, cassis, and a long, layered finish.", origin: "Napa Valley, USA", style: "Cabernet Sauvignon" },
        ],
      },
      {
        label: "Chardonnay",
        icon: "🥂",
        items: [
          { name: "Kendall-Jackson Vintner's Reserve", description: "America's best-selling Chardonnay. Full-bodied with tropical fruit flavors, vanilla, and a perfectly balanced hint of oak.", origin: "California, USA", style: "Chardonnay" },
          { name: "Rombauer", description: "A cult-favorite Napa Chardonnay famous for its rich, buttery profile. Mango, peach, and vanilla cream on the palate with a long, toasty finish.", origin: "Napa Valley, USA", style: "Chardonnay" },
          { name: "Kim Crawford", description: "A bright and lively New Zealand Chardonnay with stone fruit and citrus notes, balanced by a fresh, clean acidity. Unoaked and crisp.", origin: "Marlborough, NZ", style: "Chardonnay" },
          { name: "La Crema", description: "A cool-climate Sonoma Coast Chardonnay with elegant notes of green apple, lemon zest, and toasted hazelnut. Creamy texture with vibrant acidity.", origin: "Sonoma, USA", style: "Chardonnay" },
          { name: "Sonoma-Cutrer", description: "A refined Russian River Ranches Chardonnay with ripe pear, apple, and honeysuckle aromas. Balanced oak aging adds a layer of creamy complexity.", origin: "Sonoma, USA", style: "Chardonnay" },
        ],
      },
      {
        label: "Sauvignon Blanc",
        icon: "🌿",
        items: [
          { name: "Oyster Bay", description: "A crisp and vibrant Marlborough Sauvignon Blanc with intense aromas of passionfruit, citrus, and fresh herbs, finishing with clean, refreshing acidity.", origin: "Marlborough, NZ", style: "Sauvignon Blanc" },
          { name: "Kim Crawford", description: "New Zealand's most popular wine export. Zesty and refreshing with tropical fruit, fresh herbs, and a mouthwatering grapefruit-driven finish.", origin: "Marlborough, NZ", style: "Sauvignon Blanc" },
          { name: "Whitehaven", description: "An award-winning Marlborough Sauvignon Blanc with expressive passionfruit, lime, and fresh-cut grass aromas. Vibrant and elegantly structured.", origin: "Marlborough, NZ", style: "Sauvignon Blanc" },
          { name: "Meiomi", description: "A California Sauvignon Blanc with a fruit-forward profile of peach, melon, and white flowers. Soft and easy-drinking with a refreshing finish.", origin: "California, USA", style: "Sauvignon Blanc" },
          { name: "Cloudy Bay", description: "The wine that put Marlborough Sauvignon Blanc on the map. Intensely aromatic with gooseberry, passionfruit, and a signature mineral, herbaceous edge.", origin: "Marlborough, NZ", style: "Sauvignon Blanc" },
        ],
      },
      {
        label: "Pinot Grigio",
        icon: "🍋",
        items: [
          { name: "Santa Margherita", description: "Italy's benchmark Pinot Grigio. Dry and elegant with notes of golden apple, citrus, and a clean mineral finish. The wine that defined the category.", origin: "Alto Adige, Italy", style: "Pinot Grigio" },
          { name: "Cavit", description: "A classic Italian Pinot Grigio from Trentino. Light-bodied and refreshing with subtle pear, apple, and floral notes. Perfect as an aperitivo.", origin: "Trentino, Italy", style: "Pinot Grigio" },
          { name: "Mezzacorona", description: "A crowd-pleasing Italian Pinot Grigio with a delicate, fruity nose of apple and almond blossom. Dry and crisp with a clean, lingering finish.", origin: "Trentino, Italy", style: "Pinot Grigio" },
          { name: "Ecco Domani", description: "A light and refreshing Italian Pinot Grigio with notes of fresh melon, green apple, and a subtle floral aroma. Dry and easy to enjoy.", origin: "Delle Venezie, Italy", style: "Pinot Grigio" },
          { name: "Jermann", description: "A premium Friulian Pinot Grigio with more depth and complexity than most. Stone fruit, almonds, and a long, mineral-driven finish.", origin: "Friuli, Italy", style: "Pinot Grigio" },
        ],
      },
      {
        label: "Pinot Noir",
        icon: "🍓",
        items: [
          { name: "Meiomi", description: "A smooth and approachable California Pinot Noir blended from Sonoma, Monterey, and Santa Barbara. Bright strawberry, blackberry, and subtle mocha notes.", origin: "California, USA", style: "Pinot Noir" },
          { name: "The Prisoner", description: "A bold and complex Napa Valley Pinot Noir with rich aromas of dark cherry, plum, and vanilla. Silky tannins and an exceptionally long finish.", origin: "Napa Valley, USA", style: "Pinot Noir" },
          { name: "La Crema Sonoma", description: "An elegant Sonoma Coast Pinot Noir with vibrant cherry, raspberry, and earthy mushroom notes. Medium-bodied with bright acidity and a silky finish.", origin: "Sonoma, USA", style: "Pinot Noir" },
          { name: "Mark West", description: "A popular California Pinot Noir known for its smooth, fruit-forward profile. Ripe cherry, vanilla bean, and a hint of spice make it endlessly drinkable.", origin: "California, USA", style: "Pinot Noir" },
          { name: "Erath", description: "One of Oregon's pioneering Pinot Noirs from the Willamette Valley. Classically structured with red cherry, dried herb, and a beautiful earthy complexity.", origin: "Willamette Valley, USA", style: "Pinot Noir" },
        ],
      },
      {
        label: "Sparkling & Rosé",
        icon: "✨",
        items: [
          { name: "La Marca Prosecco", description: "An Italian sparkling wine bursting with flavors of honey, cream, and fresh peach. Bright, crisp bubbles make it ideal for any celebration.", origin: "Veneto, Italy", style: "Prosecco DOC" },
          { name: "Whispering Angel Rosé", description: "The world's most recognized Provençal rosé. Pale salmon pink with delicate strawberry, peach, and a whisper of herbs. Refined and endlessly elegant.", origin: "Provence, France", style: "Rosé" },
          { name: "Moët & Chandon Brut", description: "The world's most iconic Champagne. Bright fruitiness, a seductive palate, and an elegant maturity. The benchmark for non-vintage Champagne.", origin: "Épernay, France", style: "Champagne" },
          { name: "Josh Rosé", description: "A vibrant California rosé with flavors of fresh strawberry, watermelon, and a hint of rose petal. Crisp, refreshing, and perfect for warm weather.", origin: "California, USA", style: "Rosé" },
          { name: "Barefoot Bubbly", description: "A fun, approachable sparkling wine available in multiple flavors. Sweet and fruity with lively bubbles — perfect for celebrations on any budget.", origin: "California, USA", style: "Sparkling" },
        ],
      },
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

// ─────────────────────────────────────────────
// SHARED: Item Row for detail pages
// ─────────────────────────────────────────────

function ItemRow({ item, index, accentColor }: { item: Product; index: number; accentColor: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "2rem 1fr",
        gap: "1rem",
        padding: "1.1rem 1.5rem",
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.2s",
        cursor: "default",
      }}
    >
      <span style={{ color: accentColor, opacity: 0.4, fontFamily: "monospace", fontSize: "0.72rem", paddingTop: "0.2rem" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ color: "#f0ebe0", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.01em" }}>
            {item.name}
          </span>
          <span style={{
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: accentColor,
            border: `1px solid ${accentColor}50`,
            padding: "0.15rem 0.5rem",
            borderRadius: "2px",
            whiteSpace: "nowrap",
          }}>
            {item.style}
          </span>
        </div>
        <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.65, marginTop: "0.3rem", fontStyle: "italic" }}>
          {item.description}
        </p>
        <p style={{ color: "#555", fontSize: "0.7rem", marginTop: "0.3rem", letterSpacing: "0.06em" }}>
          {item.origin}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// DETAIL PAGE
// ─────────────────────────────────────────────

function CategoryDetail({ cat, onBack }: { cat: Category; onBack: () => void }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  const totalItems = cat.subcategories
    ? cat.subcategories.reduce((sum, s) => sum + s.items.length, 0)
    : cat.items.length;

  return (
    <div style={{ minHeight: "100vh", background: "#0f0d0a", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        .detail-back:hover { opacity: 1 !important; }
        .detail-item-list > div:last-child { border-bottom: none !important; }
      `}</style>

      {/* Hero header */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${cat.accentColor}30`,
        background: `linear-gradient(160deg, #1a1410 0%, #0f0d0a 70%)`,
      }}>
        {/* Decorative gradient orb */}
        <div style={{
          position: "absolute", top: "-80px", right: "-60px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: `radial-gradient(circle, ${cat.accentColor}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.5rem 3rem" }}>
          <button
            className="detail-back"
            onClick={onBack}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: cat.accentColor, opacity: 0.6,
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.18em", textTransform: "uppercase",
              display: "flex", alignItems: "center", gap: "0.5rem",
              marginBottom: "2.5rem", padding: 0, transition: "opacity 0.2s",
            }}
          >
            ← All Products
          </button>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
            <div style={{
              fontSize: "3rem", lineHeight: 1,
              background: `${cat.accentColor}15`,
              border: `1px solid ${cat.accentColor}30`,
              borderRadius: "12px",
              width: "64px", height: "64px",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {cat.icon}
            </div>
            <div>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.25em", textTransform: "uppercase",
                color: cat.accentColor, marginBottom: "0.5rem",
              }}>
                Our Selection · {totalItems} bottles
              </p>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 8vw, 3.8rem)",
                fontWeight: 300, color: "#f0ebe0",
                lineHeight: 1, letterSpacing: "-0.01em", margin: 0,
              }}>
                {cat.category}
              </h1>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#6a5a4a", fontSize: "1.1rem",
                fontStyle: "italic", marginTop: "0.5rem",
              }}>
                {cat.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
        {cat.subcategories ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {cat.subcategories.map((sub) => (
              <div key={sub.label}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "1rem",
                }}>
                  <span style={{ fontSize: "1rem" }}>{sub.icon}</span>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem", fontWeight: 400,
                    color: "#d4c4a8", letterSpacing: "0.02em", margin: 0,
                  }}>
                    {sub.label}
                  </h2>
                  <div style={{ flex: 1, height: "1px", background: `${cat.accentColor}25`, marginLeft: "0.5rem" }} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "#555", letterSpacing: "0.1em" }}>
                    {sub.items.length} bottles
                  </span>
                </div>
                <div className="detail-item-list" style={{
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: "8px", overflow: "hidden",
                  background: "rgba(255,255,255,0.015)",
                }}>
                  {sub.items.map((item, i) => (
                    <ItemRow key={item.name} item={item} index={i} accentColor={cat.accentColor} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="detail-item-list" style={{
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "8px", overflow: "hidden",
            background: "rgba(255,255,255,0.015)",
          }}>
            {cat.items.map((item, i) => (
              <ItemRow key={item.name} item={item} index={i} accentColor={cat.accentColor} />
            ))}
          </div>
        )}

        {/* Footer strip */}
        <div style={{
          marginTop: "3rem",
          padding: "1.5rem 2rem",
          border: `1px solid ${cat.accentColor}25`,
          borderRadius: "8px",
          background: `${cat.accentColor}08`,
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: "1rem",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#7a6a58", fontSize: "1rem", fontStyle: "italic", margin: 0,
          }}>
            Don't see what you're after? We can special order many bottles.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              fontFamily: "'Jost', sans-serif",
              padding: "0.6rem 1.25rem", borderRadius: "4px",
              background: cat.accentColor, color: "#0f0d0a",
              fontWeight: 500, fontSize: "0.75rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Request a Bottle</a>
            <a href="tel:+1XXXXXXXXXX" style={{
              fontFamily: "'Jost', sans-serif",
              padding: "0.6rem 1.25rem", borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.15)", color: "#888",
              fontWeight: 400, fontSize: "0.75rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Call the Store</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PRODUCTS PAGE
// ─────────────────────────────────────────────

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

  if (activeCat) {
    return <CategoryDetail cat={activeCat} onBack={() => setActiveCat(null)} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#faf7f2", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .products-search:focus { outline: none; border-color: #2a1f14 !important; box-shadow: 0 0 0 3px rgba(42,31,20,0.08); }
        .cat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .cat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(42,31,20,0.12) !important; }
        .cat-card:hover .cat-view-btn { background: #2a1f14 !important; }
        .item-pill:hover { background: #ede8e0 !important; }
        .tag-pill:hover { background: #e8e0d4 !important; border-color: #c8b89a !important; }
      `}</style>

      {/* ── Page Hero ── */}
      <div style={{
        background: "#1a1208",
        borderBottom: "1px solid #2e2010",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle texture lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.015) 39px, rgba(255,255,255,0.015) 40px)",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 3.5rem", position: "relative" }}>
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
            Our Collection
          </h1>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            color: "#7a6a52", fontSize: "0.95rem", maxWidth: "480px",
            lineHeight: 1.7, letterSpacing: "0.02em",
          }}>
            A curated sample of what's on our shelves. Selection changes with the seasons — call us if you're hunting something specific.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <a href="tel:+1XXXXXXXXXX" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0d0a", background: "#c8922a",
              padding: "0.65rem 1.4rem", borderRadius: "3px",
              textDecoration: "none", fontWeight: 500,
            }}>
              Call the Store
            </a>
            <a href="/contact" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#c8b89a", border: "1px solid rgba(200,184,154,0.3)",
              padding: "0.65rem 1.4rem", borderRadius: "3px",
              textDecoration: "none", fontWeight: 400,
            }}>
              Request a Bottle
            </a>
          </div>
        </div>
      </div>

      {/* ── Search & Filters ── */}
      <div style={{
        background: "#f5f0e8",
        borderBottom: "1px solid #e4d8c8",
        padding: "1.5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ position: "relative", maxWidth: "560px" }}>
            <span style={{
              position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)",
              color: "#a0907a", fontSize: "0.9rem", pointerEvents: "none",
            }}>⌕</span>
            <input
              className="products-search"
              type="text"
              placeholder="Search spirits, wines, or beers…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%", padding: "0.75rem 1rem 0.75rem 2.5rem",
                fontFamily: "'Jost', sans-serif", fontSize: "0.88rem",
                color: "#2a1f14", background: "#fff",
                border: "1px solid #ddd0bc", borderRadius: "4px",
                boxSizing: "border-box", transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
            {["Top Sellers", "New Arrivals", "Local Craft", "Gift Bottles", "Party Packs"].map((tag) => (
              <span key={tag} className="tag-pill" style={{
                fontFamily: "'Jost', sans-serif", fontSize: "0.68rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#7a6a52", background: "#ede8e0",
                border: "1px solid #ddd0bc",
                padding: "0.35rem 0.85rem", borderRadius: "2px",
                cursor: "pointer", transition: "all 0.15s",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Grid ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 0" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#2a1f14" }}>
              Nothing found
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", color: "#a0907a", fontSize: "0.88rem", marginTop: "0.5rem" }}>
              Try a different search term.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              style={{
                marginTop: "1.5rem", fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase",
                background: "#2a1f14", color: "#f0ebe0",
                border: "none", padding: "0.65rem 1.5rem", borderRadius: "3px", cursor: "pointer",
              }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#b0a090", marginBottom: "2rem",
            }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? "category" : "categories"}
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5px",
              background: "#e4d8c8",
              border: "1px solid #e4d8c8",
              borderRadius: "8px",
              overflow: "hidden",
            }}>
              {filteredProducts.map((cat) => (
                <div
                  key={cat.category}
                  className="cat-card"
                  style={{
                    background: "#fff",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                  }}
                >
                  {/* Card header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                      <div style={{
                        width: "44px", height: "44px",
                        borderRadius: "8px",
                        background: `${cat.accentColor}12`,
                        border: `1px solid ${cat.accentColor}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.4rem", flexShrink: 0,
                      }}>
                        {cat.icon}
                      </div>
                      <div>
                        <h2 style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.5rem", fontWeight: 400,
                          color: "#1a1208", margin: 0, letterSpacing: "0.01em",
                        }}>
                          {cat.category}
                        </h2>
                        <p style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.72rem", color: "#a0907a",
                          letterSpacing: "0.06em", margin: "0.2rem 0 0",
                        }}>
                          {cat.tagline}
                        </p>
                      </div>
                    </div>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.65rem", letterSpacing: "0.1em",
                      color: cat.accentColor,
                      border: `1px solid ${cat.accentColor}40`,
                      padding: "0.2rem 0.55rem", borderRadius: "2px",
                      whiteSpace: "nowrap", marginTop: "0.2rem",
                    }}>
                      {cat.subcategories
                        ? `${cat.subcategories.reduce((s, sub) => s + sub.items.length, 0)} bottles`
                        : `${cat.items.length} bottles`}
                    </span>
                  </div>

                  {/* Item pills */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {cat.items.slice(0, 5).map((item) => (
                      <div key={item.name} className="item-pill" style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "0.55rem 0.75rem",
                        background: "#faf7f2", border: "1px solid #ede8e0",
                        borderRadius: "4px", transition: "background 0.15s", cursor: "default",
                      }}>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#2a1f14", fontWeight: 400 }}>
                          {item.name}
                        </span>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#b0a090", letterSpacing: "0.08em" }}>
                          {item.style}
                        </span>
                      </div>
                    ))}
                    {cat.items.length > 5 && (
                      <p style={{
                        fontFamily: "'Jost', sans-serif", fontSize: "0.75rem",
                        color: "#b0a090", fontStyle: "italic",
                        padding: "0.3rem 0.75rem", margin: 0,
                      }}>
                        + {cat.items.length - 5} more
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    className="cat-view-btn"
                    onClick={() => setActiveCat(cat)}
                    style={{
                      marginTop: "1.5rem",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase",
                      background: "#2a1f14", color: "#f0ebe0",
                      border: "none", borderRadius: "4px",
                      padding: "0.75rem", width: "100%",
                      cursor: "pointer", transition: "background 0.2s",
                    }}
                  >
                    Browse {cat.category} →
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

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
              Hunting something rare?
            </h3>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              color: "#7a6a52", fontSize: "0.88rem", maxWidth: "440px", lineHeight: 1.7,
            }}>
              We source hard-to-find bottles on request. Reach out and we'll track it down.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", position: "relative" }}>
            <a href="/contact" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0d0a", background: "#c8922a",
              padding: "0.75rem 1.5rem", borderRadius: "3px",
              textDecoration: "none", fontWeight: 500,
            }}>
              Send a Request
            </a>
            <a href="tel:+1XXXXXXXXXX" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#c8b89a", border: "1px solid rgba(200,184,154,0.25)",
              padding: "0.75rem 1.5rem", borderRadius: "3px",
              textDecoration: "none", fontWeight: 400,
            }}>
              Call Now
            </a>
          </div>
        </div>

        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
          color: "#c0b0a0", textAlign: "center", marginTop: "2rem",
          letterSpacing: "0.06em",
        }}>
          * Selection varies by season and availability.
        </p>
      </div>
    </div>
  );
}
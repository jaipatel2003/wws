"use client";

import { useEffect, useMemo, useState } from "react";

// --- Data ---

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

// --- Shared Item Row ---

function ItemRow({ item, index, accentColor }: { item: Product; index: number; accentColor: string }) {
  return (
    <div
      style={{
        background: "#111",
        padding: "1.4rem 1.25rem",
        transition: "background 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#161616")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#111")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: "0.7rem",
            color: accentColor,
            opacity: 0.6,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          style={{
            color: "#f5f0e8",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            flex: 1,
            minWidth: 0,
          }}
        >
          {item.name}
        </h2>
        <span
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: accentColor,
            background: `${accentColor}14`,
            border: `1px solid ${accentColor}30`,
            padding: "0.2rem 0.55rem",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {item.style}
        </span>
      </div>
      <p
        style={{
          color: "#999",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          fontStyle: "italic",
          marginTop: "0.5rem",
          marginLeft: "1.6rem",
        }}
      >
        {item.description}
      </p>
      <p
        style={{
          fontSize: "0.72rem",
          color: "#555",
          letterSpacing: "0.06em",
          marginTop: "0.4rem",
          marginLeft: "1.6rem",
        }}
      >
        {item.origin}
      </p>
    </div>
  );
}

// --- Category Detail Page ---

function CategoryDetail({ cat, onBack }: { cat: Category; onBack: () => void }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
        {/* Decorative watermark — hidden on tiny screens so it doesn't overflow */}
        <div
          className="hidden sm:block"
          style={{
            position: "absolute",
            right: "-2rem",
            top: "-2rem",
            fontSize: "16rem",
            opacity: 0.04,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {cat.icon}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 relative">
          <button
            onClick={onBack}
            style={{
              color: cat.accentColor,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Georgia', serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "2rem",
              opacity: 0.8,
              padding: 0,
            }}
          >
            ← Back to All Products
          </button>

          <div className="flex items-start gap-4">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "14px",
                background: `${cat.accentColor}18`,
                border: `1px solid ${cat.accentColor}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.9rem",
                flexShrink: 0,
              }}
            >
              {cat.icon}
            </div>
            <div>
              <p
                style={{
                  color: cat.accentColor,
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.35rem",
                }}
              >
                Our Selection
              </p>
              <h1
                style={{
                  fontSize: "clamp(1.9rem, 8vw, 3.5rem)",
                  fontWeight: 800,
                  color: "#f5f0e8",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                {cat.category}
              </h1>
              <p style={{ color: "#888", fontSize: "1rem", fontStyle: "italic" }}>
                {cat.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Item List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {cat.subcategories ? (
          /* Subcategory layout (e.g. Wine) */
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {cat.subcategories.map((sub) => (
              <div key={sub.label}>
                {/* Subcategory header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.75rem",
                    paddingBottom: "0.6rem",
                    borderBottom: `1px solid ${cat.accentColor}30`,
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{sub.icon}</span>
                  <h3
                    style={{
                      color: "#f5f0e8",
                      fontSize: "1rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {sub.label}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: cat.accentColor,
                      opacity: 0.6,
                      marginLeft: "auto",
                    }}
                  >
                    {sub.items.length} bottles
                  </span>
                </div>

                {/* Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1px",
                    background: "#1e1e1e",
                    border: "1px solid #1e1e1e",
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  {sub.items.map((item, i) => (
                    <ItemRow key={item.name} item={item} index={i} accentColor={cat.accentColor} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Standard flat layout */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "#1e1e1e",
              border: "1px solid #1e1e1e",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {cat.items.map((item, i) => (
              <ItemRow key={item.name} item={item} index={i} accentColor={cat.accentColor} />
            ))}
          </div>
        )}

        {/* Bottom callout */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem",
            borderRadius: "14px",
            background: "#141414",
            border: "1px solid #222",
          }}
        >
          <p style={{ color: "#666", fontSize: "0.88rem", fontStyle: "italic", marginBottom: "1rem" }}>
            Don't see what you're looking for? We can special order many bottles.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                padding: "0.65rem 1.25rem",
                borderRadius: "10px",
                background: cat.accentColor,
                color: "#0d0d0d",
                fontWeight: 700,
                fontSize: "0.85rem",
                textDecoration: "none",
                letterSpacing: "0.04em",
                flexShrink: 0,
              }}
            >
              Request a Bottle
            </a>
            <a
              href="tel:+1XXXXXXXXXX"
              style={{
                padding: "0.65rem 1.25rem",
                borderRadius: "10px",
                border: "1px solid #333",
                color: "#aaa",
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "none",
                letterSpacing: "0.04em",
                flexShrink: 0,
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
                      {cat.items.slice(0, 5).map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-50 border border-gray-100 hover:bg-gray-100 transition"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-400">→</span>
                        </li>
                      ))}
                      {cat.items.length > 5 && (
                        <li className="px-3 py-2 text-sm text-gray-400 italic">
                          + {cat.items.length - 5} more…
                        </li>
                      )}
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
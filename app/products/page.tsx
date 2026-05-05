export default function ProductsPage() {
    const products = [
      {
        category: "Whiskey",
        description: "Smooth, bold, and aged classics.",
        items: ["Jameson", "Buffalo Trace", "Woodford Reserve", "Maker’s Mark", "Knob Creek"],
        icon: "🥃",
      },
      {
        category: "Vodka",
        description: "Clean spirits for cocktails or straight.",
        items: ["Tito’s", "Grey Goose", "Ciroc", "Ketel One", "Absolut"],
        icon: "🍸",
      },
      {
        category: "Tequila",
        description: "From blanco to añejo favorites.",
        items: ["Don Julio", "Patron", "Casamigos", "Espolon", "1800"],
        icon: "🌵",
      },
      {
        category: "Wine",
        description: "Reds, whites, rosés, and bubbly.",
        items: ["Josh Cabernet", "Kendall Jackson", "Barefoot", "La Marca Prosecco", "Oyster Bay"],
        icon: "🍷",
      },
      {
        category: "Beer",
        description: "Domestic, imported, and craft picks.",
        items: ["Corona", "Modelo", "Heineken", "Bud Light", "Sam Adams"],
        icon: "🍺",
      },
      {
        category: "Rum",
        description: "Sweet, spiced, and tropical staples.",
        items: ["Bacardi", "Captain Morgan", "Malibu", "Kraken", "Diplomático"],
        icon: "🏝️",
      },
    ];
  
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
                call us anytime if you’re looking for something specific.
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
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 pr-12 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                🔍
              </div>
            </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((cat) => (
              <div
                key={cat.category}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition"
              >
                {/* Glow background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition" />
  
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                        {cat.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {cat.category}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          {cat.description}
                        </p>
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
                          key={item}
                          className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-50 border border-gray-100 hover:bg-gray-100 transition"
                        >
                          <span className="font-medium">{item}</span>
                          <span className="text-gray-400">→</span>
                        </li>
                      ))}
                    </ul>
                  </div>
  
                  <button className="mt-6 w-full rounded-xl bg-gray-900 text-white py-3 font-semibold hover:bg-gray-800 transition">
                    View More {cat.category}
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom Callout */}
          <div className="mt-16 rounded-3xl border border-gray-200 bg-gradient-to-r from-gray-900 to-gray-800 px-10 py-12 text-white shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-3xl font-extrabold">
                  Looking for something rare?
                </h3>
                <p className="mt-3 text-gray-200 max-w-2xl">
                  We can special order many bottles depending on availability.
                  Call or send a request and we’ll help you find it.
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
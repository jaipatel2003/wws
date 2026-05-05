import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featured = [
    { name: "Hennessy VS", price: "$49.99", tag: "Cognac" },
    { name: "Casamigos Blanco", price: "$54.99", tag: "Tequila" },
    { name: "Johnnie Walker Black", price: "$39.99", tag: "Whiskey" },
    { name: "Veuve Clicquot", price: "$64.99", tag: "Champagne" },
  ];

  const perks = [
    {
      title: "Huge Selection",
      desc: "Whiskey, vodka, tequila, rum, wine, craft beer, and more.",
      icon: "🥃",
    },
    {
      title: "Weekly Deals",
      desc: "New discounts every week on top brands and customer favorites.",
      icon: "🔥",
    },
    {
      title: "Local & Convenient",
      desc: "Easy parking, fast checkout, and friendly recommendations.",
      icon: "📍",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
        {/* subtle background glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-200">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Open Daily • Great Prices • Friendly Service
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Westford{" "}
                <span className="text-yellow-400">Wine & Spirits</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                Premium beer, wine, whiskey, and spirits — with weekly deals and
                a selection that’s always changing.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/deals"
                  className="bg-yellow-400 text-black px-7 py-3 rounded-xl font-bold shadow-md hover:bg-yellow-300 transition text-center"
                >
                  View Weekly Deals
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/25 bg-white/5 px-7 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition text-center"
                >
                  Visit Us
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-300">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  🥂 Wine
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  🍺 Beer
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  🥃 Whiskey
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  🍸 Spirits
                </span>
              </div>
            </div>

            {/* Right (Store Picture) */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-blue-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/store.webp"
                  alt="Westford Wine Storefront"
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-extrabold text-yellow-400">500+</p>
                  <p className="text-sm text-gray-300 mt-1">Bottles</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-extrabold text-yellow-400">Weekly</p>
                  <p className="text-sm text-gray-300 mt-1">Deals</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-extrabold text-yellow-400">Fast</p>
                  <p className="text-sm text-gray-300 mt-1">Checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Why shop with us?
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl text-lg">
                We keep the shelves stocked with top brands, rare finds, and
                customer favorites.
              </p>
            </div>

            <Link
              href="/products"
              className="text-gray-900 font-bold hover:underline"
            >
              Browse Products →
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl">
                    {p.icon}
                  </div>
                  <span className="text-sm text-gray-400 font-semibold">
                    ★★★★★
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{p.desc}</p>

                <div className="mt-6 h-[2px] w-0 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Featured Picks
              </h2>
              <p className="mt-3 text-gray-600 text-lg">
                Customer favorites that are usually in stock.
              </p>
            </div>

            <Link
              href="/deals"
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold shadow hover:bg-gray-800 transition text-center"
            >
              See Deals
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <div
                key={item.name}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {item.tag}
                  </span>
                  <span className="text-gray-400 text-sm">In Stock</span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-gray-900 group-hover:text-gray-700 transition">
                  {item.name}
                </h3>

                <p className="mt-3 text-2xl font-extrabold text-gray-900">
                  {item.price}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Pricing may vary by availability.
                </p>

                <button className="mt-6 w-full rounded-xl bg-gray-900 text-white py-3 font-bold hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 text-gray-900 font-extrabold hover:underline"
            >
              Browse all products <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-6 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 px-10 py-14 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Need something specific?
              </h3>
              <p className="mt-4 text-gray-200 text-lg max-w-2xl">
                Looking for a rare bottle or a specific brand? Call us and we’ll
                check inventory or help you find it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-xl bg-yellow-400 text-black font-extrabold hover:bg-yellow-300 transition text-center"
              >
                Contact Us
              </Link>

              <Link
                href="/products"
                className="px-7 py-3 rounded-xl border border-white/20 bg-white/5 font-extrabold hover:bg-white hover:text-black transition text-center"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Westford Wine & Spirits. All rights
          reserved.
        </p>
      </section>
    </div>
  );
}
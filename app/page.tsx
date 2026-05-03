import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            Westford Wine & Spirits
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Premium beer, wine, whiskey, and spirits. Great prices, weekly deals,
            and friendly service.
          </p>

          <div className="mt-10">
            <Image
              src="/store.webp"
              alt="Westford Wine Storefront"
              width={700}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/deals"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              View Weekly Deals
            </Link>

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Huge Selection</h2>
            <p className="mt-2 text-gray-600">
              Whiskey, vodka, tequila, rum, wine, craft beer, and more.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Weekly Deals</h2>
            <p className="mt-2 text-gray-600">
              Discounts on top brands every week. Stop in or check online.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold">Local & Convenient</h2>
            <p className="mt-2 text-gray-600">
              Easy parking, quick checkout, and helpful recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Featured Picks</h2>
          <p className="mt-2 text-gray-600">
            Customer favorites available in-store.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Hennessy VS", price: "$49.99" },
              { name: "Casamigos Blanco", price: "$54.99" },
              { name: "Johnnie Walker Black", price: "$39.99" },
              { name: "Veuve Clicquot", price: "$64.99" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white border rounded-xl p-5 shadow-sm"
              >
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/products"
              className="text-blue-600 font-semibold hover:underline"
            >
              Browse all products →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
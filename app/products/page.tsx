export default function ProductsPage() {
    const products = [
      { category: "Whiskey", items: ["Jameson", "Buffalo Trace", "Woodford Reserve"] },
      { category: "Vodka", items: ["Tito’s", "Grey Goose", "Ciroc"] },
      { category: "Tequila", items: ["Don Julio", "Patron", "Casamigos"] },
      { category: "Wine", items: ["Josh Cabernet", "Kendall Jackson", "Barefoot"] },
      { category: "Beer", items: ["Corona", "Modelo", "Heineken"] },
    ];
  
    return (
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="mt-3 text-gray-600">
          Here’s a sample of what we carry. Call us if you’re looking for something specific.
        </p>
  
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((cat) => (
            <div
              key={cat.category}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              <h2 className="text-xl font-bold">{cat.category}</h2>
              <ul className="mt-4 text-gray-700 space-y-2">
                {cat.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
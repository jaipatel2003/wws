export default function DealsPage() {
    const deals = [
      { name: "Jack Daniel’s 750ml", price: "$24.99", oldPrice: "$29.99" },
      { name: "Grey Goose 750ml", price: "$29.99", oldPrice: "$34.99" },
      { name: "Modelo 12 Pack", price: "$16.99", oldPrice: "$19.99" },
      { name: "Josh Cabernet", price: "$12.99", oldPrice: "$15.99" },
    ];
  
    return (
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold">Weekly Deals</h1>
        <p className="mt-3 text-gray-600">
          Deals updated weekly. While supplies last.
        </p>
  
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.name}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              <h2 className="text-xl font-bold">{deal.name}</h2>
              <p className="mt-3 text-gray-700">
                <span className="text-2xl font-bold">{deal.price}</span>{" "}
                <span className="ml-2 line-through text-gray-400">
                  {deal.oldPrice}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
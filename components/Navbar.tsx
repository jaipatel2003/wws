import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Westford Wine & Spirits
        </Link>

        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/products" className="hover:text-black">Products</Link>
          <Link href="/deals" className="hover:text-black">Deals</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold">Westford Wine & Spirits</h2>
            <p className="mt-2 text-gray-300">
              Serving the community with quality spirits, wine, and beer.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold">Quick Info</h3>
            <p className="mt-2 text-gray-300">9 Cornerstone Square Westford, MA 01886</p>
            <p className="text-gray-300">(978) 692-9161</p>
          </div>
  
          <div>
            <h3 className="font-semibold">Legal</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Must be 21+ to purchase alcohol.
            </p>
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Westford Wine & Spirits. All rights reserved.
        </div>
      </footer>
    );
  }
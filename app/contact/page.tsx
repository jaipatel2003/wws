export default function ContactPage() {
    return (
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold">Contact & Location</h1>
        <p className="mt-3 text-gray-600">
          Stop by the store or call us for availability.
        </p>
  
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6 shadow-sm bg-white">
            <h2 className="text-2xl font-bold">Store Info</h2>
  
            <div className="mt-4 space-y-2 text-gray-700">
              <p><span className="font-semibold">Address:</span> 9 Cornerstone Square Westford, MA 01886</p>
              <p><span className="font-semibold">Phone:</span> (978) 692-9161</p>
              <p><span className="font-semibold">Email:</span> westfordwine@gmail.com</p>
            </div>
  
            <div className="mt-6">
              <h3 className="font-bold text-lg">Hours</h3>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>Mon - Sat: 8am - 9pm</li>
                <li>Sun: 10am - 8pm</li>
              </ul>
            </div>
          </div>
  
          <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
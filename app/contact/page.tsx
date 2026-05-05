export default function ContactPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto py-16 px-6">
          {/* Header */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Contact & Location
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Visit us in-store or reach out anytime for availability, pricing,
              or special requests.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {/* Info Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Store Information
              </h2>
  
              <div className="mt-6 space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <p>
                    <span className="font-semibold text-gray-900">Address:</span>
                    <br />
                    9 Cornerstone Square, Westford, MA 01886
                  </p>
                </div>
  
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <p>
                    <span className="font-semibold text-gray-900">Phone:</span>
                    <br />
                    (978) 692-9161
                  </p>
                </div>
  
                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <p>
                    <span className="font-semibold text-gray-900">Email:</span>
                    <br />
                    westfordwine@gmail.com
                  </p>
                </div>
              </div>
  
              {/* Hours */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900">Hours</h3>
  
                <div className="mt-3 space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Mon - Sat</span>
                    <span className="font-medium">8:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
  
              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+19786929161"
                  className="flex-1 text-center rounded-xl bg-gray-900 text-white py-3 font-bold hover:bg-gray-800 transition"
                >
                  Call Now
                </a>
                <a
                  href="mailto:westfordwine@gmail.com"
                  className="flex-1 text-center rounded-xl border border-gray-300 bg-white py-3 font-bold hover:bg-gray-50 transition"
                >
                  Email Us
                </a>
              </div>
            </div>
  
            {/* Map Card */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="p-5 border-b">
                <h2 className="text-xl font-bold text-gray-900">
                  Find Us Here
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Conveniently located in Westford, MA
                </p>
              </div>
  
              <div className="h-[420px]">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4894247122515!2d-71.43069002321229!3d42.56562337117454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e397d56b668eeb%3A0x640567b57c612984!2s9%20Cornerstone%20Square%2C%20Westford%2C%20MA%2001886!5e1!3m2!1sen!2sus!4v1777943194941!5m2!1sen!2sus"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
  
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Looking for something specific?
            </h3>
            <p className="mt-2 text-gray-600">
              Call us — we can check availability or special order items.
            </p>
  
            <div className="mt-6">
              <a
                href="tel:+19786929161"
                className="inline-block px-8 py-3 rounded-xl bg-yellow-400 text-black font-extrabold hover:bg-yellow-300 transition"
              >
                Call (978) 692-9161
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
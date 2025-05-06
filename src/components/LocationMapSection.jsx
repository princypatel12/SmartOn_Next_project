export default function LocationMapSection() {
    return (
      <section id="location" className="py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="relative w-full aspect-video shadow-lg overflow-hidden">
                <iframe
                  src="https://maps.app.goo.gl/MYSgSA77tB8SMoReA"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
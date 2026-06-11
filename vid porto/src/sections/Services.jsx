import BookBtn from "../components/BookBtn";

function Services() {

  const services = [
  {
    title: "Wedding Package",
    description:
      "Full-day coverage from getting ready to the last dance.",
    features: [
      "8 hours of coverage",
      "Online gallery within 4 weeks",
      "300+ edited photos",
      "Complimentary engagement session",
    ],
    price: "$2500",
  },
  {
    title: "Engagement Package",
    description:
      "A romantic pre-wedding session at your favorite location.",
    features: [
      "2 hours of coverage",
      "50+ edited photos",
      "Online gallery",
      "1 location",
    ],
    price: "$800",
  },
  {
    title: "Family Package",
    description:
      "Natural and heartfelt family portraits you'll cherish forever.",
    features: [
      "1.5 hours of coverage",
      "30+ edited photos",
      "Online gallery",
      "Up to 6 family members",
    ],
    price: "$500",
  },
];
  return (
    <section id="services" className="min-h-screen bg-brown text-cream">
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gold uppercase tracking-widest">
          What We Offer
        </p>

        <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Our Services
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-dark-brown p-10 text-left rounded-sm"
            >
              <h3 className="font-display text-3xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 text-cream/40">
                {service.description}
              </p>

              <ul className="list-disc pl-5 py-5 text-cream/40">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <hr className="my-1 border-brown" />

              <p className="mt-5 font-display text-xl text-gold">
                Starting from {service.price}
              </p>

              <div className="mt-6">
                <BookBtn />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
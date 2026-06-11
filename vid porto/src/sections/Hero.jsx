import BookBtn from "../components/BookBtn";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-charcoal text-white flex flex-col justify-center py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm sm:text-base md:text-lg font-light tracking-wide">
          Photography & Videography
        </p>

        <h1 className="mt-4 font-display font-bold leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Your Story,
          <br />
          <span className="text-gold italic">
            Told Forever
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/70">
          Professional photography and videography services for weddings,
          engagements, family portraits, and all of life's unforgettable
          moments.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookBtn />

          <button className=" px-6 py-3 border border-white font-bold transition duration-300 hover:brightness-75">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
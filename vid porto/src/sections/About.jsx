import BookBtn from "../components/BookBtn";

function About() {
  return (
    <section
      id="about"
      className="bg-charcoal text-cream py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 md:p-10">
            <div className="aspect-[4/5] bg-amber-50 w-full"></div>

            <h2 className="text-2xl md:text-4xl font-bold mt-6 text-charcoal">
              About Us
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            About Me
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            I believe love deserves a witness.
          </h1>

          <p className="text-sm md:text-base mt-6 text-cream/80 leading-relaxed">
            I'm Elara — a photographer and cinematographer based in New York,
            specializing in weddings and intimate celebrations. For over eight
            years I have traveled across the world to document love stories with
            honesty, warmth, and a cinematic eye.
          </p>

          <p className="text-sm md:text-base mt-5 text-cream/80 leading-relaxed">
            My approach is quiet and unobtrusive. I move through your day like a
            shadow, capturing stolen glances, whispered words, and the chaos of
            joy — then weaving them into something timeless.
          </p>

          <hr className="border-brown my-8" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-3xl md:text-5xl text-gold font-display">
                8+
              </h3>
              <p className="text-cream/50 text-xs md:text-sm uppercase tracking-wide">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl text-gold font-display">
                200+
              </h3>
              <p className="text-cream/50 text-xs md:text-sm uppercase tracking-wide">
                Events
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl text-gold font-display">
                12
              </h3>
              <p className="text-cream/50 text-xs md:text-sm uppercase tracking-wide">
                Cities
              </p>
            </div>
          </div>

          <div className="mt-8">
            <BookBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
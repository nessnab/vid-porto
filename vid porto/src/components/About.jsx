import BookBtn from "./BookBtn"

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-charcoal text-cream gap-10 ">

      <div className="bg-white p-30">
        <img src="" alt="" className="bg-amber-50" />
        <h1 className="text-4xl font-bold mt-5">About Us</h1>
      </div>

      <div className="max-w-lg py-10">
        <p className="text-gold text-sm tracking-widest uppercase mb-3">
          About Me
        </p>
        <h1 className="text-6xl font-bold font-display max-w-lg">
          I believe love deserves a witness.
        </h1>
        <p className="text-sm mt-5 text-cream/80">
          I'm Elara — a photographer and cinematographer based in New York, specializing in weddings and intimate celebrations. For over eight years I have traveled across the world to document love stories with honesty, warmth, and a cinematic eye.
        </p>
        <p className="text-sm mt-5 text-cream/80">
          My approach is quiet and unobtrusive. I move through your day like a shadow, capturing stolen glances, whispered words, and the chaos of joy — then weaving them into something timeless.
        </p>

        <hr className="border-brown border-1 my-5"/>

        <div className="flex items-center gap-30 text-center text-gold font-display uppercase text-left">
          <div>
            <h3 className="text-5xl">8+</h3>
            <p className="text-cream/50 text-sm font-body tracking-wide">Years</p>
          </div>
          <div>
            <h3 className="text-5xl">200+</h3>
            <p className="text-cream/50 text-sm font-body tracking-wide">Events</p>
          </div>
          <div>
            <h3 className="text-5xl">12</h3>
            <p className="text-cream/50 text-sm font-body tracking-wide">Cities</p>
          </div>
        </div>

        <BookBtn />



      </div>

    </section>
  )
}

export default About
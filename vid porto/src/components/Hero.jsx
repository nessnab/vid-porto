import BookBtn from "./BookBtn"

function Hero() {
  return (
    <section id="hero" className="relative bg-charcoal text-white min-h-screen items-center justify-center py-20 pt-40">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-light pb-5">Photography & Videography</p>
        <h1 className="text-8xl font-display">
          Your Story,
          <br />
          <span className="text-gold italic">
          Told Forever
          </span>
        </h1>
        <p className="pt-5 text-md max-w-md mx-auto">Professional photography and videography services for all your special occasions.</p>
      </div>
      <div className="flex gap-4 mt-10 justify-center">
        
        <BookBtn />
        <button className="my-4 cursor-pointer px-6 py-3 border border-white text-white font-bold hover:brightness-70 transition duration-300">
          View Portfolio
        </button>
      </div>
    </section>
  )
}

export default Hero
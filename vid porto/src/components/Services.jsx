import BookBtn from "./BookBtn"

function Services() {
  return (
    <section className="min-h-screen items-center justify-center bg-brown text-cream">
      <div className="py-20 text-center">
        <p className="text-gold uppercase tracking-widest">what we offer</p>
        <h1 className="text-6xl font-bold font-display">
          Our Services
        </h1>

        <div className="flex mx-10 my-10 items-center justify-center gap-0.5 text-cream">

          <div className="bg-dark-brown p-10 text-left ">
            <h3 className="font-bold text-3xl font-display ">
              Wedding Package
            </h3>
            <p className="text-cream/40 max-w-xs mt-5">
              Full-day coverage from getting ready to the last dance. Every laugh, tear, and tender glance — preserved forever in cinematic stills.
            </p>
            <ul className="text-left list-disc pl-5 py-5 text-cream/40">
              <li>8 hours of coverage</li>
              <li>Online gallery within 4 weeks</li>
              <li>300+ edited photos</li>
              <li>Complimentary engagement session</li>
            </ul>
            <hr className="border-brown border-1 my-1"/>
            <p className="text-gold text-xl mt-5 font-display">
              Start From $2500
            </p>
            <BookBtn />          
          </div>
          <div className="bg-dark-brown p-10 text-left ">
            <h3 className="font-bold text-3xl font-display ">
              Wedding Package
            </h3>
            <p className="text-cream/40 max-w-xs mt-5">
              Full-day coverage from getting ready to the last dance. Every laugh, tear, and tender glance — preserved forever in cinematic stills.
            </p>
            <ul className="text-left list-disc pl-5 py-5 text-cream/40">
              <li>8 hours of coverage</li>
              <li>Online gallery within 4 weeks</li>
              <li>300+ edited photos</li>
              <li>Complimentary engagement session</li>
            </ul>
            <hr className="border-brown border-1 my-1"/>
            <p className="text-gold text-xl mt-5 font-display">
              Start From $2500
            </p>
            <BookBtn />          
          </div>
          <div className="bg-dark-brown p-10 text-left ">
            <h3 className="font-bold text-3xl font-display ">
              Wedding Package
            </h3>
            <p className="text-cream/40 max-w-xs mt-5">
              Full-day coverage from getting ready to the last dance. Every laugh, tear, and tender glance — preserved forever in cinematic stills.
            </p>
            <ul className="text-left list-disc pl-5 py-5 text-cream/40">
              <li>8 hours of coverage</li>
              <li>Online gallery within 4 weeks</li>
              <li>300+ edited photos</li>
              <li>Complimentary engagement session</li>
            </ul>
            <hr className="border-brown border-1 my-1"/>
            <p className="text-gold text-xl mt-5 font-display">
              Start From $2500
            </p>
            <BookBtn />          
          </div>
          

        </div>

      </div>


    </section>
  )
}

export default Services
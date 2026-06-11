import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-brown text-cream">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div className="max-w-2xl">
            <p className="text-gold uppercase tracking-widest">
              Let's connect
            </p>

            <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Tell Us
              <br />
              <span className="italic">Your Story</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/50">
              Every love story is unique and deserves to be told with
              intention. Reach out and let's start planning your day together.
            </p>
          </div>

          {/* Right */}
          <div className="w-full max-w-md">

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-gold/70 text-xs">
                    Email
                  </p>

                  <a
                    href="mailto:hello@yourstudio.com"
                    className="text-lg md:text-xl font-light hover:brightness-75 transition duration-300 break-words"
                  >
                    hello@yourstudio.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-gold/70 text-xs">
                    Phone
                  </p>

                  <a
                    href="tel:+1234567890"
                    className="text-lg md:text-xl font-light hover:brightness-75 transition duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-gold/70 text-xs">
                    Based In
                  </p>

                  <p className="text-lg md:text-xl font-light">
                    Your City — Available Worldwide
                  </p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-10">
              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 border border-gold/20 flex items-center justify-center hover:border-gold hover:text-gold transition duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 border border-gold/20 flex items-center justify-center hover:border-gold hover:text-gold transition duration-300"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-12 h-12 border border-gold/20 flex items-center justify-center hover:border-gold hover:text-gold transition duration-300"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
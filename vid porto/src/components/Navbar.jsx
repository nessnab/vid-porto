import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full box-border py-4 px-6 md:px-10 bg-rgba(255, 255, 255, 0.1) backdrop-blur-md text-gold z-50 font-bold text-sm border-b border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <a className="text-xl font-display cursor-pointer" href="#hero">
            Aesthetic Studio
          </a>

          {/* Desktop Menu */}
          <div className="uppercase">
            <ul className="hidden md:flex items-center gap-4 cursor-pointer">
              <li className="hover:brightness-70 transition duration-300">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:brightness-70 transition duration-300">
                <a href="#services">Services</a>
              </li>
              <li className="hover:brightness-70 transition duration-300">
                <a href="#about">About</a>
              </li>
              <li className="hover:brightness-70 transition duration-300">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="px-4 py-2 text-gold bg-transparent border border-gold hover:brightness-70 transition duration-300">
                <a href="#booking">Book Now</a>
              </li>
            </ul>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden uppercase mt-4">
            <ul className="flex flex-col gap-4 cursor-pointer">
              <li
                className="hover:brightness-70 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <a href="#portfolio">Portfolio</a>
              </li>
              <li
                className="hover:brightness-70 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <a href="#about">About</a>
              </li>
              <li
                className="hover:brightness-70 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <a href="#services">Services</a>
              </li>
              <li
                className="hover:brightness-70 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <a href="#testimonials">Testimonials</a>
              </li>
              <li
                className="px-4 py-2 text-gold bg-transparent border border-gold hover:brightness-70 transition duration-300 w-fit"
                onClick={() => setIsOpen(false)}
              >
                <a href="#booking">Book Now</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
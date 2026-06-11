
function Navbar() {
  return (
    <nav className="sticky top-0 w-full box-border py-4 px-6 md:px-10 bg-charcoal backdrop-blur-md text-gold z-50 font-bold text-sm border-b border-gold/10 ">
      <div className="max-w-6xl mx-auto ">

        <div className="flex items-center justify-between">
          <a className="text-xl font-display cursor-pointer" href="#hero">
            Aesthetic Studio
          </a>

          <div className="uppercase ">
            <ul className="hidden md:flex items-center gap-4 cursor-pointer">
              <li className="hover:brightness-70 transition duration-300">Portofolio</li>
              <li className="hover:brightness-70 transition duration-300">About</li>
              <li className="hover:brightness-70 transition duration-300">Services</li>
              <li className="hover:brightness-70 transition duration-300">Testimonials</li>
              <li className="px-4 py-2 text-gold bg-transparent border border-gold  hover:brightness-70 transition duration-300">Book Now</li>
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>


        </div>
      </div>

    </nav>
  );
}

export default Navbar;
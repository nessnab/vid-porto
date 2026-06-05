
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-10 top-0 bg-rgba(255, 255, 255, 0.1) backdrop-blur-md text-gold z-100 fixed w-full font-bold text-sm border-b border-gold/10 border-scroll">
      <div>
        <a className="text-xl font-display cursor-pointer" href="#hero">
          Aesthetic Studio
        </a>
      </div>

      <div className="uppercase ">
        <ul className="flex items-center gap-4 cursor-pointer">
          <li className="hover:brightness-70 transition duration-300">Portofolio</li>
          <li className="hover:brightness-70 transition duration-300">About</li>
          <li className="hover:brightness-70 transition duration-300">Services</li>
          <li className="hover:brightness-70 transition duration-300">Testimonials</li>
          <li className="px-4 py-2 text-gold bg-transparent border border-gold  hover:brightness-70 transition duration-300">Book Now</li>
        </ul>
        
        
      </div>
    </nav>
  );
}

export default Navbar;
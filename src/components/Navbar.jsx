import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f1115]/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-yellow-400">
          Harish<span className="text-blue-400">.dev</span>
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300">

          {menus.map((item) => (

            <li key={item}>

              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-[#12151B] border-t border-gray-700">

          {menus.map((item) => (

            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer"
            >
              {item}
            </Link>

          ))}

        </div>

      )}

    </nav>
  );
};

export default Navbar;
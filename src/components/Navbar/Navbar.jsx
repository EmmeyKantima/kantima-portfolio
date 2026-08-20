import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        K.
      </a>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a href="#contact" className="navbar-cta" onClick={closeMenu}>
        Let's talk
        <ArrowUpRight size={16} />
      </a>

      <button className="navbar-menu-button" onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Navbar;
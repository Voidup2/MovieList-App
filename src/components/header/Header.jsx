import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function Header({onSearch, onSort}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo"><Link to="/">CineScope</Link></div>

      {/* Navigation */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="search-area desktop-only">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => onSearch?.(e.target.value)}
        />

      </div>
      <div className="watchlist desktop-only">
        <span>Watchlist</span>
        <span className="count">0</span>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      {/* Mobile view */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <input
            type="text"
            placeholder="Search movies..."
            onChange={(e) => onSearch?.(e.target.value)}
          />

          <div className="mobile-watchlist">
            Watchlist <span className="count">0</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

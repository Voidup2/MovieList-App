import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">CineScope</div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
      </nav>

      {/* Right Button */}
      <div className="watchlist">
        <span>Watchlist</span>
        <span className="count">0</span>
      </div>
    </header>
  );
}

export default Header;

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>CineScope</h2>
          <p>Your hub for movies, web series & anime.</p>
          <p>Please give marks...</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Info */}
        <div className="footer-info">
          <h4>Info</h4>
          <p>Powered by TMDB API</p>
          <p>Developed by Light and team.</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CineScope.</p>
      </div>
    </footer>
  );
}

export default Footer;

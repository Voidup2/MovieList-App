import "./About.css";
import Home from "../../../src/assets/home.png";
import Home2 from "../../../src/assets/home2.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About CineScope</h1>

        <p className="about-intro">
          CineScope is a modern OTT-style web application that allows users to
          explore movies, web series, and anime in one place.
        </p>

        <section className="about-section">
          <h2>🎬 What is CineScope?</h2>
          <p>CineScope is a place for cinephiles. It is a modern OTT-style web application that lets users explore movies, web series, and anime in one place. It provides real-time search, category-based filtering, and detailed information such as ratings, release dates, and overviews.</p>
        </section>

        <div className="abt-container">
          <div className="abt-img"><img src={Home} alt="Home page" /></div>
          <div className="abt-dis">
            <h2>Track your personal watchlist</h2>
            <p>Search, filter and sort movies of your choice and add them to your watchlist. Get description about the movies you want to know about. Also find out how much does the world liked it.</p>
          </div>
        </div>
        <div className="abt2-container">
          <div className="abt2-dis">
            <h2>Explore a wide range of content</h2>
            <p>Discover movies, web series, and anime from various genres and categories. CineScope offers a diverse collection of content to cater to different tastes and preferences. It also provides all the information you need to make informed decisions about what to watch.</p>
          </div>
          <div className="abt2-img"><img src={Home2} alt="Home page2" /></div>
        </div>

        <section className="about-section">
          <h2>📌 Data Disclaimer</h2>
          <p>
            CineScope uses the TMDB API for fetching movie and TV data. This
            product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

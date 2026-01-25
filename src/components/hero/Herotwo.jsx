import {useEffect, useState} from 'react';
import './Herotwo.css';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../../api/data";
import { useNavigate } from "react-router-dom";


const getSearchUrl = (query, page = 1) => {
  return `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`;
};

const getApiUrl = (filter, page = 1) => {
  switch (filter) {
    case "hollywood":
      return `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=en&page=${page}`;

    case "bollywood":
      return `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=hi&page=${page}`;

    case "webseries":
      return `${BASE_URL}/discover/tv?api_key=${API_KEY}&page=${page}`;

    case "anime":
      return `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&page=${page}`;

    default:
      return `${BASE_URL}/trending/all/week?api_key=${API_KEY}&page=${page}`;
  }
};

const Herotwo = ({searchQuery = ""}) => {
    const [filter, setFilter] = useState("all");
    const[movies, setMovies] = useState([]);
    const[page, setPage] = useState(1);
    const[loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(10);

    const navigate = useNavigate();

    const fetchMovies = async (selectedFilter, pageNo, append = false, search = "") => {
        setLoading(true);
        try {
            const url = search ? getSearchUrl(search, pageNo) : getApiUrl(selectedFilter, pageNo);
            const res = await fetch(url);
            const data = await res.json();

            const normalized = (data.results || []).map((movie) => ({
                id: movie.id,
                title: movie.title || movie.name,
                poster: movie.poster_path,
                rating: movie.vote_average,
                mediaType: movie.media_type || (movie.name ? "tv" : "movie"),
            }));

            setMovies((prev) => {
                if (!append) return normalized;
                const combined = [...prev, ...normalized];

            return Array.from(
                new Map(combined.map((movie) => [movie.id, movie])).values()
            );
        });
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        if (!searchQuery) return;
        
        setMovies([]);
        setPage(1); 
        fetchMovies(filter, 1, false, searchQuery);

    }, [searchQuery]);

    useEffect(() => {
        if (searchQuery) return;
        setMovies([]);
        setPage(1);
        setVisibleCount(10);
        fetchMovies(filter, 1, false);
    },[filter]);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchMovies(filter, nextPage, true, searchQuery);
        setVisibleCount(prev => prev + 10);
    };

    return (
        <>

        <div className='movie-cards'>

            <div className="filter-bar">
                <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "hollywood" ? "active" : ""} onClick={() => setFilter("hollywood")}>Hollywood</button>
                <button className={filter === "bollywood" ? "active" : ""} onClick={() => setFilter("bollywood")}>Bollywood</button>
                <button className={filter === "webseries" ? "active" : ""} onClick={() => setFilter("webseries")}>Web Series</button>
                <button className={filter === "anime" ? "active" : ""} onClick={() => setFilter("anime")}>Anime</button>
            </div>
            <div className='cards-container' id='mv-card'>
            {movies.slice(0,visibleCount).map((movie) => (
                <div key={movie.id} className="movie-card fade-in" onClick={() => navigate(`/${movie.mediaType}/${movie.id}`)}>
                    <div className='card-img'>
                        <img
                            src={
                              movie.poster
                                ? `${IMAGE_BASE_URL}${movie.poster}`
                                : "/placeholder.jpg"
                            }
                            alt={movie.title}
                            loading="lazy"
                            />
            <div className="card-overlay">
                <h3>{movie.title}</h3>

            <div className='movie-bottom'>    
                <span className={`badge ${movie.mediaType}`}>
                  {movie.mediaType === "movie"
                    ? "Movie"
                    : movie.mediaType === "tv"
                    ? "Web Series"
                    : "Anime"}
                </span>
                <p className="movie-rating">
        ⭐       {movie.rating ? movie.rating.toFixed(1) : "N/A"}/10
                </p>
                </div>
            </div>
        </div>
</div>
            ))}
        </div>
        <div className='load-more'>
            <button onClick={handleLoadMore} disabled={loading}>
                {loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
        </div>
        </>
    );
};

export default Herotwo;
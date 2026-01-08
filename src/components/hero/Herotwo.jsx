import {useEffect, useState} from 'react';
import './Herotwo.css';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../../api/data";
const cards = [
        {
            id: 1,
            img: "images",
            title: "Discover",
        },
        {
            id: 2,
            img: "images",
            title: "Collect",
        },
        {
            id: 3,
            img: "images",
            title: "Analyze",
        },
        {
            id: 4,
            img: "images",
            title: "Analyze",
        },
        {
            id: 5,
            img: "images",
            title: "Analyze",
        },
    ];
const Herotwo = () => {
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
          .then(res => res.json())
          .then(data => setMovies(data.results.slice(0, 6)))
          .catch(err => console.error(err));
        }, []);
    return (
        <>
        <div className='movie-cards'>
            <h2>Recently trending</h2>
            <div className='cards-container'>
            {movies.map(movie =>
            (
                <div key={movie.id} className="movie-card">
                    <div className='card-img'>
                        <img
                            src={
                              movie.poster_path
                                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                                : "/placeholder.jpg"
                            }
                            alt={movie.title}
                            />
                    </div>
                    <div className='card-title'>
                        <p>{movie.title}</p>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
        </>
    );
}
export default Herotwo;
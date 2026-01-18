import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../../api/data";
import "./MovieDetails.css";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();

  // detect media type from URL
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`
        );
        const json = await res.json();

        // TMDB returns success=false on 404
        if (json.success === false) {
          setData(null);
        } else {
          setData(json);
        }
      } catch (err) {
        console.error(err);
        setData(null);
      }
      setLoading(false);
    };

    fetchDetails();
  }, [id, mediaType]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!data) return <p className="loading">Content not found</p>;

  return (
    <div className="movie-details">
      <img
        src={
          data.poster_path
            ? `${IMAGE_BASE_URL}${data.poster_path}`
            : "/placeholder.jpg"
        }
        alt={data.title || data.name}
      />

      <div className="details-info">
        <h1>{data.title || data.name}</h1>

        <div className="stats">
          <span>⭐ {data.vote_average ? data.vote_average.toFixed(1) : "N/A"}</span>
          <span>🗳 {data.vote_count ?? "N/A"}</span>

          {mediaType === "movie" && (
            <span>⏱ {data.runtime ? `${data.runtime} min` : "N/A"}</span>
          )}

          {mediaType === "tv" && (
            <span>📺 {data.number_of_seasons ?? "N/A"} Seasons</span>
          )}

          <span>📅 {data.release_date || data.first_air_date || "N/A"}</span>
        </div>

        <p className="overview">{data.overview || "No description available."}</p>
      </div>
    </div>
  );
};

export default Details;

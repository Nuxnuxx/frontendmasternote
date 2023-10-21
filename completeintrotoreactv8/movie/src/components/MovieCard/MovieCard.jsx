import { Link } from "react-router-dom";
import "./movieCard.css";
import Like from "../Like/Like";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <h2 className="title">{movie.title}</h2>
        <div className="details">
          <div className="release-date">{movie.release_date}</div>
          <div className="average">{movie.vote_average} / 10</div>
        </div>
        <img
          className="movie-card-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <Like movie={movie}/>
    </div>
  );
};

export default MovieCard;

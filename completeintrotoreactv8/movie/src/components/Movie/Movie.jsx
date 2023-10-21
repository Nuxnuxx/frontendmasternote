import { useQuery } from "@tanstack/react-query";
import fetchMovie from "./fetchMovie";
import { useParams } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  const { id } = useParams();
  const movie = useQuery(["detailsMovie", id], fetchMovie);

  const result = movie?.data ?? [];

  if (movie.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="movie">
      <h1>{result.title}</h1>
      <div className="status">{result.status}</div>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        alt={result.title}
      />
      <p className="overview">{result.overview}</p>
      <div className="details-movie">
        <div className="average">{result.vote_average} / 10</div>
        <div className="release-date">{result.release_date}</div>
      </div>
      <h2 className="genres-title">Genres</h2>
      <div className="genres">
        {result.genres.map((genre, index) => (
          <div className="genre" key={index}>
            {genre.name}
          </div>
        ))}
      </div>
      <div className="money">
        <div className="revenue">
          revenue : {result.revenue}$
        </div>
        <div className="budget">
          budget : {result.budget}$
        </div>
      </div>
      {
        result.revenue >= result.budget ? (
          <div className="worth">
            Worth it
          </div>
        ) : (
          <div className="not-worth">
            Not Worth it
          </div>
        )
      }
    </div>
  );
};

export default Movie;

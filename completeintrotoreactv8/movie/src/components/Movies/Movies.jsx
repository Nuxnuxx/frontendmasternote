import { useQuery } from "@tanstack/react-query";
import fetchMovies from "./fetchMovies";
import "./movies.css";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
  const movies = useQuery(["popularMovies"],fetchMovies);
  const results = movies?.data?.results ?? [];

  return (
    <div className="movies">
      {
        results.map((movie,index) => {
          return (
            <MovieCard key={index} movie={movie}/>
          )
        })
      }
    </div>
  );
};

export default Movies;

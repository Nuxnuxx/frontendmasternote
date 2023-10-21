import { useContext } from "react";
import LikedContext from "./LikedContext";
import MovieCard from "../MovieCard/MovieCard";
import "./liked.css";

const Liked = () => {
  const [likedArray] = useContext(LikedContext);
  return (
    <div>
      {likedArray ? (
        <div className="liked-movie">
          {likedArray.map((liked, index) => (
            <MovieCard key={index} movie={liked} />
          ))}
        </div>
      ) : (
        <div>No liked movie</div>
      )}
    </div>
  );
};

export default Liked;

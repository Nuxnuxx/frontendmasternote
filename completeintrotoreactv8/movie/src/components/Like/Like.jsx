import { useContext } from "react";
import "./like.css";
import LikedContext from "../Liked/LikedContext";

const Like = ({ movie }) => {
  const [likedArray, setLikedContext] = useContext(LikedContext);

  const addMovie = (newItems) => {
    setLikedContext((prevItems) => [...prevItems, newItems]);
  };

  return (
    <div className="like">
      {!likedArray.includes(movie) ? (
        <button
          className="not-like"
          onClick={() => {
            addMovie(movie);
          }}
        >
          Like
        </button>
      ) : (
        <button className="already-like">Like</button>
      )}
    </div>
  );
};

export default Like;

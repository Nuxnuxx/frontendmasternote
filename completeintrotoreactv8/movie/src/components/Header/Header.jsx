import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/movies">
        <h1 className="nav">Film</h1>
      </Link>
      <Link to="/liked">
        <h1 className="nav">Liked</h1>
      </Link>
      <Link to="/about">
        <h1 className="nav">About</h1>
      </Link>
    </div>
  );
};

export default Header;

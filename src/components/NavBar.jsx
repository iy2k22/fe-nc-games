import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

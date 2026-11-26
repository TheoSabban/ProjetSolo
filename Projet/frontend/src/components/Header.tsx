import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        Fire Emblem
      </Link>
    </header>
  );
}

export default Header;

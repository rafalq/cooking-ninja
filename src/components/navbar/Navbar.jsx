import { NavLink } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";

import Searchbar from "../searchbar/SearchBar";

// styles
import "./Navbar.css";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>
            Cooking
            <img src="/ninja-icon.svg" />
            Ninja
          </h1>
        </NavLink>
        <Searchbar />
        <NavLink className="app-btn" to="/create">
          CREATE RECIPE
        </NavLink>
      </nav>
    </div>
  );
}

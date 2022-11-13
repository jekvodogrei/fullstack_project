import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history("/");
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: "0 2rem" }}>
        <span className="brand-logo">Скорочення посилань</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Створити</NavLink>
          </li>
          <li>
            <NavLink to="/create">Посилання</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Вийти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

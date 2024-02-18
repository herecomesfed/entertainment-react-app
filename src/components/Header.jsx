import { NavLink } from "react-router-dom";

import logoIcon from "../assets/logo.svg";
import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import seriesIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icon-nav-bookmark.svg";
import avatarIcon from "../assets/image-avatar.png";

const links = [
  {
    name: "home",
    src: homeIcon,
    path: "/",
  },
  {
    name: "movies",
    src: moviesIcon,
    path: "/movies",
  },
  {
    name: "series",
    src: seriesIcon,
    path: "/series",
  },
  { name: "bookmarks", src: bookmarkIcon, path: "/bookmark" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoIcon} alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          {links.map((l) => {
            return (
              <li key={l.name}>
                <NavLink to={l.path}>
                  <img src={l.src} alt={l.name} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="avatar">
        <img src={avatarIcon} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;

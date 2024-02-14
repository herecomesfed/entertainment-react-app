import logoIcon from "../assets/logo.svg";
import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import seriesIcon from "../assets/icon-nav-tv-series.svg";
// import bookmarksIconEmpty from "./assets/icon-bookmark-empty.svg";
import bookmarksIconFull from "../assets/icon-bookmark-full.svg";
import avatarIcon from "../assets/image-avatar.png";

const icons = [
  {
    name: "home",
    src: homeIcon,
  },
  {
    name: "movies",
    src: moviesIcon,
  },
  {
    name: "series",
    src: seriesIcon,
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoIcon} alt="Logo" />
      </div>
      <nav className="menu">
        {icons.map((i) => {
          return (
            <a key={i.name} href="#">
              <img src={i.src} alt={i.name} />
            </a>
          );
        })}
        <a href="#">
          <img src={bookmarksIconFull} alt="Bookmarks" />
        </a>
      </nav>
      <div className="avatar">
        <img src={avatarIcon} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;

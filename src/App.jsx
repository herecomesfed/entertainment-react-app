import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import logoIcon from "./assets/logo.svg";
import homeIcon from "./assets/icon-nav-home.svg";
import moviesIcon from "./assets/icon-nav-movies.svg";
import seriesIcon from "./assets/icon-nav-tv-series.svg";
import bookmarksIconEmpty from "./assets/icon-bookmark-empty.svg";
import bookmarksIconFull from "./assets/icon-bookmark-full.svg";
import avatarIcon from "./assets/image-avatar.png";

const icons = [
  {
    name: "logo",
    src: logoIcon,
  },
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
  {
    name: "bookmarks",
    src: {
      empty: bookmarksIconEmpty,
      full: bookmarksIconFull,
    },
  },
  {
    name: "avatar",
    src: avatarIcon,
  },
];

function App() {
  return (
    <>
      <Header />
    </>
  );
}

const Header = () => {
  return icons.map((i) => {
    console.log(i);
    return (
      <div key={i.name}>
        <img src={i.src} alt="" />
      </div>
    );
  });
};

export default App;

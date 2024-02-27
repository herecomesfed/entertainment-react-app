import iconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import iconBookmarkFull from "../assets/icon-bookmark-full.svg";

import iconPlay from "../assets/icon-play.svg";

import movieIcon from "../assets/icon-category-movie.svg";
import tvIcon from "../assets/icon-category-tv.svg";
const Card = ({ d, absolute, handleBookmarkShow }) => {
  return (
    <div className="card">
      <img
        src={d.thumbnail.regular.large.replace("./", "./src/")}
        alt={d.title}
      />
      <div className={`card__text ${absolute ? "absolute" : ""}`}>
        <p className="card__info paragraph-sm">
          {d.year} •{" "}
          <img
            src={d.category === "Movie" ? movieIcon : tvIcon}
            alt={d.category}
            style={{ marginRight: 0.5 + "rem" }}
          />
          {d.category} • {d.rating}
        </p>
        <div className="card__title heading-sm">{d.title}</div>
      </div>
      <div
        className={`card__bookmark ${d.isBookmarked ? "bookmarked" : ""}`}
        onClick={() => handleBookmarkShow(d)}
      >
        <img
          src={d.isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
          alt={d.isBookmarked ? "Remove from Bookmark" : "Add to Bookmark"}
        />
      </div>
      {/* <div className="card__play-container">
        <div className="card__play-inner">
          <img src={iconPlay} alt="Play" />
          <h4 className="heading-s">Play</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Card;

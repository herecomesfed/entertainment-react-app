import iconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import iconBookmarkFull from "../assets/icon-bookmark-full.svg";
const Card = ({ d, absolute, handleBookmarkShow }) => {
  return (
    <div className="card">
      <img
        src={d.thumbnail.regular.large.replace("./", "./src/")}
        alt={d.title}
      />
      <div className={`card__text ${absolute ? "absolute" : ""}`}>
        <div className="card__info paragraph-sm">
          {d.year} • <img src={`${d.category}Icon`} alt="" />
          {d.category} • {d.rating}
        </div>
        <div className="card__title heading-sm">{d.title}</div>
      </div>
      <div
        className={`card__bookmark ${d.isBookmarked ? "bookmarked" : ""}`}
        onClick={handleBookmarkShow}
      >
        <img
          src={d.isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
          alt={d.isBookmarked ? "Remove from Bookmark" : "Add to Bookmark"}
        />
      </div>
    </div>
  );
};

export default Card;

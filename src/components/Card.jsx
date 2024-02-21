import iconBookmark from "../assets/icon-bookmark-empty.svg";
const Card = ({ d, absolute }) => {
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
      <div className="card__bookmark">
        <img src={iconBookmark} alt="Add to Bookmark" />
      </div>
    </div>
  );
};

export default Card;

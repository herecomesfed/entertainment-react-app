import iconBookmark from "../assets/icon-bookmark-empty.svg";

const Recommended = ({ data }) => {
  return (
    <>
      <div className="recommended">
        <h2 className="heading-md">Recommended</h2>
        <div className="recommended__grid">
          {data.map((d) => {
            return (
              <div key={d.title} className="recommended__item">
                <img
                  src={d.thumbnail.regular.large.replace("./", "./src/")}
                  alt={d.title}
                />
                <div className="recommended__text">
                  <div className="recommended__info paragraph-sm">
                    {d.year} • <img src={`${d.category}Icon`} alt="" />
                    {d.category} • {d.rating}
                  </div>
                  <div className="recommended__title heading-sm">{d.title}</div>
                  <div className="trending__bookmark">
                    <img src={iconBookmark} alt="Add to Bookmark" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recommended;

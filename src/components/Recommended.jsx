import iconBookmark from "../assets/icon-bookmark-empty.svg";
import Card from "./Card";

const Recommended = ({ data, heading }) => {
  return (
    <>
      <div className="recommended">
        <h2 className="heading-md m-block-2">{heading}</h2>
        <div className="cards__grid">
          {data.map((d) => {
            return <Card key={d.title} d={d} iconBookmark={iconBookmark} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Recommended;

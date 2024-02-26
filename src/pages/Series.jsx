import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";
import { useEffect } from "react";

const Series = ({
  isSearchEmpty,
  resData,
  searchValue,
  setSearchPlaceholder,
  handleBookmarkShow,
}) => {
  useEffect(() => {
    setSearchPlaceholder("Search for TV series");
  }, [setSearchPlaceholder]);
  return (
    <>
      <Cards
        resData={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "TV Series"
        }
      >
        {resData
          .filter((d) => d.category === "TV Series")
          .map((d) => {
            return (
              <Card
                key={d.title}
                d={d}
                handleBookmarkShow={handleBookmarkShow}
              />
            );
          })}
      </Cards>
    </>
  );
};

export default Series;

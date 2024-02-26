import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";
import { useEffect } from "react";

const Movies = ({
  isSearchEmpty,
  resData,
  searchValue,
  setSearchPlaceholder,
  handleBookmarkShow,
}) => {
  useEffect(() => {
    setSearchPlaceholder("Search for movies");
  }, [setSearchPlaceholder]);
  return (
    <>
      <Cards
        resData={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "Movies"
        }
      >
        {resData
          .filter((d) => d.category === "Movie")
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

export default Movies;

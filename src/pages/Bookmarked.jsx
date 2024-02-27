import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";

import { useEffect } from "react";

const Bookmarked = ({
  data,
  isSearchEmpty,
  resData,
  setResData,
  searchValue,
  setSearchPlaceholder,
  handleBookmarkShow,
}) => {
  const bookmarkCategoryFilter = (category) => {
    return `Found ${
      resData.filter((d) => d.category === category && d.isBookmarked === true)
        .length
    } results for "${searchValue}"`;
  };
  return (
    <>
      {useEffect(() => {
        // setResData(data);
        setSearchPlaceholder("Search for bookmarked shows");
      }, [setResData, data, setSearchPlaceholder])}

      <Cards
        resData={resData}
        heading={
          !isSearchEmpty ? bookmarkCategoryFilter("Movie") : "Bookmarked Movies"
        }
      >
        {resData
          .filter((d) => d.category === "Movie" && d.isBookmarked === true)
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
      <Cards
        resData={resData}
        heading={
          !isSearchEmpty
            ? bookmarkCategoryFilter("TV Series")
            : "Bookmarked TV Series"
        }
      >
        {resData
          .filter((d) => d.category === "TV Series" && d.isBookmarked === true)
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

export default Bookmarked;

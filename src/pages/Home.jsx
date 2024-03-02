import TrendingContent from "../components/TrendingContent.jsx";
import Cards from "../components/Cards.jsx";

import { useEffect } from "react";
import Card from "../components/Card.jsx";

const Home = ({
  data,
  resData,
  setResData,
  isSearchEmpty,
  searchValue,
  setSearchPlaceholder,
  handleBookmarkShow,
}) => {
  useEffect(() => {
    setSearchPlaceholder("Search for movies or TV series");
  }, [setSearchPlaceholder]);

  return (
    <>
      {isSearchEmpty && (
        <TrendingContent data={data} handleBookmarkShow={handleBookmarkShow} />
      )}
      <Cards
        resData={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "Recommended for you"
        }
      >
        {resData.map((d) => {
          return (
            <Card
              key={d.title}
              d={d}
              resData={resData}
              setResData={setResData}
              searchValue={searchValue}
              handleBookmarkShow={handleBookmarkShow}
              // handleBookmarkShow={handleBookmarkShow}
            />
          );
        })}
      </Cards>
    </>
  );
};

export default Home;

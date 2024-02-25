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
    setResData(resData);
    setSearchPlaceholder("Search for movies or TV series");
  }, [setResData, data, setSearchPlaceholder]);

  return (
    <>
      {isSearchEmpty && <TrendingContent data={data} />}
      <Cards
        resData={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "Recommended"
        }
      >
        {resData.map((d) => {
          return (
            <Card
              key={d.title}
              d={d}
              resData={resData}
              setResData={setResData}
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

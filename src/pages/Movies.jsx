import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";
import { useEffect } from "react";

const Movies = ({
  data,
  isSearchEmpty,
  resData,
  setResData,
  searchValue,
  setSearchPlaceholder,
}) => {
  useEffect(() => {
    setResData(
      data.filter((d) => {
        return d.category === "Movie";
      })
    );
    setSearchPlaceholder("Search for movies");
  }, [setResData, data, setSearchPlaceholder]);
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
            return <Card key={d.title} d={d} />;
          })}
      </Cards>
    </>
  );
};

export default Movies;

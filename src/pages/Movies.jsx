import Cards from "../components/Cards.jsx";

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
        data={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "Movies"
        }
      />
    </>
  );
};

export default Movies;

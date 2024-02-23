import Cards from "../components/Cards.jsx";

import { useEffect } from "react";

const Series = ({
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
        return d.category === "TV Series";
      })
    );
    setSearchPlaceholder("Search for TV series");
  }, [setResData, data, setSearchPlaceholder]);
  return (
    <>
      <Cards
        data={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "TV Series"
        }
      />
    </>
  );
};

export default Series;

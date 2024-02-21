import SearchBar from "../components/SearchBar.jsx";
import TrendingContent from "../components/TrendingContent.jsx";
import Recommended from "../components/Recommended.jsx";

import { useState } from "react";

const Movies = ({ data }) => {
  const [resData, setResData] = useState(
    data.filter((d) => d.category === "Movie")
  );
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchBar
        data={data}
        resData={resData}
        setResData={setResData}
        placeholder={"Search for movies or TV series"}
        setIsSearchEmpty={setIsSearchEmpty}
        setSearchvalue={setSearchValue}
      />
      <Recommended
        data={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "Recommended"
        }
      />
    </>
  );
};

export default Movies;

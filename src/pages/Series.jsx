import SearchBar from "../components/SearchBar.jsx";
import Cards from "../components/Cards.jsx";

import { useState } from "react";

const Series = ({ data }) => {
  const [resData, setResData] = useState(
    data.filter((d) => d.category === "TV Series")
  );
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchBar
        data={data}
        resData={resData}
        setResData={setResData}
        placeholder={"Search for TV series"}
        setIsSearchEmpty={setIsSearchEmpty}
        setSearchvalue={setSearchValue}
      />
      <Cards
        data={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "Series"
        }
      />
    </>
  );
};

export default Series;

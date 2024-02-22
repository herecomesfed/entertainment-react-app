import SearchBar from "../components/SearchBar.jsx";
import TrendingContent from "../components/TrendingContent.jsx";
import Cards from "../components/Cards.jsx";

import { useState } from "react";

const Home = ({ data }) => {
  const [resData, setResData] = useState(data);
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
      {isSearchEmpty && <TrendingContent data={data} />}
      <Cards
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

export default Home;

import TrendingContent from "../components/TrendingContent.jsx";
import Cards from "../components/Cards.jsx";

import { useEffect } from "react";

const Home = ({
  data,
  resData,
  isSearchEmpty,
  searchValue,
  setSearchPlaceholder,
}) => {
  // const [resData, setResData] = useState(data);
  // const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchPlaceholder("Search for movies or TV series");
  }, [setSearchPlaceholder]);
  return (
    <>
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

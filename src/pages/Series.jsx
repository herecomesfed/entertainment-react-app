import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";
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
        resData={resData}
        heading={
          !isSearchEmpty
            ? `Found ${resData.length} results for "${searchValue}"`
            : "TV Series"
        }
      >
        {resData
          .filter((d) => d.category === "TV Series")
          .map((d) => {
            return <Card key={d.title} d={d} />;
          })}
      </Cards>
    </>
  );
};

export default Series;

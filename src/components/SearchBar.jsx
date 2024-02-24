import search from "../assets/icon-search.svg";

const SearchBar = ({
  data,
  placeholder,
  resData,
  setResData,
  setIsSearchEmpty,
  setSearchvalue,
}) => {
  const handleSearchData = (e) => {
    console.log(resData);
    if (e.target.value !== "") {
      setIsSearchEmpty(false);
      setSearchvalue(e.target.value);
      setResData(
        data.filter((d) =>
          d.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
    if (e.target.value === "") {
      setIsSearchEmpty(true);
      setResData(data);
      setSearchvalue("");
    }
  };

  return (
    <div className="search-bar">
      <img className="search-bar__icon" src={search} alt="Search" />
      <input
        className="heading-md"
        type="text"
        placeholder={placeholder}
        onChange={handleSearchData}
      />
    </div>
  );
};

export default SearchBar;

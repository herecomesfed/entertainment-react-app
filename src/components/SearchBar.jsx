import search from "../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img className="search-bar__icon" src={search} alt="Search" />
      <input
        className="heading-md"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default SearchBar;

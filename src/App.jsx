// Import Stylesheet
import "./App.css";
import "./sass/main.scss";

// Import packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Import Components
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Series from "./pages/Series.jsx";

// Import Data
import dataJSON from "../data.json";
import SearchBar from "./components/SearchBar.jsx";
import Bookmarked from "./pages/Bookmarked.jsx";

function App() {
  const [data, setData] = useState(dataJSON);
  const [resData, setResData] = useState(data);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("");

  const handleBookmarkShow = function (d) {
    setData(
      data.map((element) => {
        return element.title === d.title
          ? { ...element, isBookmarked: !d.isBookmarked }
          : element;
      })
    );
  };

  useEffect(() => {
    !isSearchEmpty
      ? setResData(
          data.filter((d) =>
            d.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setResData(data);
  }, [isSearchEmpty, searchValue, data]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main id="main-content">
          <SearchBar
            data={data}
            resData={resData}
            setResData={setResData}
            placeholder={searchPlaceholder}
            setIsSearchEmpty={setIsSearchEmpty}
            setSearchvalue={setSearchValue}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  data={data}
                  resData={resData}
                  setResData={setResData}
                  isSearchEmpty={isSearchEmpty}
                  searchValue={searchValue}
                  setSearchPlaceholder={setSearchPlaceholder}
                  handleBookmarkShow={handleBookmarkShow}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  data={data}
                  resData={resData}
                  setResData={setResData}
                  isSearchEmpty={isSearchEmpty}
                  searchValue={searchValue}
                  setSearchPlaceholder={setSearchPlaceholder}
                  handleBookmarkShow={handleBookmarkShow}
                />
              }
            />
            <Route
              path="/series"
              element={
                <Series
                  data={data}
                  resData={resData}
                  setResData={setResData}
                  isSearchEmpty={isSearchEmpty}
                  searchValue={searchValue}
                  setSearchPlaceholder={setSearchPlaceholder}
                  handleBookmarkShow={handleBookmarkShow}
                />
              }
            />
            <Route
              path="/bookmark"
              element={
                <Bookmarked
                  data={data}
                  resData={resData}
                  setResData={setResData}
                  isSearchEmpty={isSearchEmpty}
                  searchValue={searchValue}
                  setSearchPlaceholder={setSearchPlaceholder}
                  handleBookmarkShow={handleBookmarkShow}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

// Import Stylesheet
import "./App.css";
import "./sass/main.scss";

// Import packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Import Components
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Series from "./pages/Series.jsx";

// Import Data
import data from "../data.json";
import SearchBar from "./components/SearchBar.jsx";
import Bookmarked from "./pages/Bookmarked.jsx";

function App() {
  const [resData, setResData] = useState(data);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("");

  // const handleBookmarkShow = function (d) {
  //   // if (d.title === d.title)
  //   //   setResData({ ...resData, isBookmarked: !d.isBookmarked });
  //   console.log("Ciao");
  // };
  const handleBookmarkShow = function () {
    // if (d.title === d.title)
    //   setResData({ ...resData, isBookmarked: !d.isBookmarked });
    // console.log(d.title);
    console.log("ciao");
  };

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

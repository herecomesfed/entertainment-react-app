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

// Import Data
import data from "../data.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/movies" element={<Movies data={data} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

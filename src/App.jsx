// Import Stylesheet
import "./App.css";
import "./sass/main.scss";

// Import Components
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TrendingContent from "./components/TrendingContent.jsx";

// Import Data
import data from "../data.json";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SearchBar />
        <TrendingContent data={data} />
      </main>
    </>
  );
}

export default App;

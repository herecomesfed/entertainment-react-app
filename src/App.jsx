// Import Stylesheet
import "./App.css";
import "./sass/main.scss";

// Import Components
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TrendingContent from "./components/TrendingContent.jsx";
import Recommended from "./components/Recommended.jsx";

// Import Data
import data from "../data.json";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SearchBar />
        <TrendingContent data={data} />
        <Recommended data={data} />
      </main>
    </>
  );
}

export default App;

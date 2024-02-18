import SearchBar from "../components/SearchBar.jsx";
import TrendingContent from "../components/TrendingContent.jsx";
import Recommended from "../components/Recommended.jsx";

const Home = ({ data }) => {
  return (
    <>
      <SearchBar />
      <TrendingContent data={data} />
      <Recommended data={data} />
    </>
  );
};

export default Home;

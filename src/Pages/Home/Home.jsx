import { Helmet } from "react-helmet";
import Banner from "../Shared/Banner/Banner";
import Cards from "../Shared/Cards/Cards";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Unity Estates | Home</title>
      </Helmet>
        <Banner></Banner>
        <Cards></Cards>
    </div>
  );
};

export default Home;

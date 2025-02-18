import CategoryItemsCatalog from "../../components/CategoryItemsCatalog/CategoryItemsCatalog";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <CategoryItemsCatalog />
    </>
  );
};

export default Home;

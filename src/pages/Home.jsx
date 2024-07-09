import ProductBanner from "../components/ProductBanner/ProductBanner";
import ShopProduct from "../components/ShopProduct/ShopProduct";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Outlet />
      <ProductBanner />
      <ShopProduct />
      <Footer />
    </div>
  );
};

export default Home;

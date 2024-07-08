import CartPage from "./CartPage/CartPage";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import ProductBanner from "./ProductBanner/ProductBanner";
import ShopProduct from "./ShopProduct/ShopProduct";

function TimbuCloudShop() {
  return (
    <main>
      <NavBar />
      <ProductBanner />
      <ShopProduct />
      <CartPage />
      <Footer />
    </main>
  );
}

export default TimbuCloudShop;

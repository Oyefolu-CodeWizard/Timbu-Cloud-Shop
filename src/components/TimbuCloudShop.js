import CartPage from "./CartPage/CartPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
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
      <CheckoutPage />
      <Footer />
    </main>
  );
}

export default TimbuCloudShop;

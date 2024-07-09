import "./CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CartCard from "../CartCard/CartCard";
import Footer from "../Footer/Footer";
import OrderPage from "../OrderPage/OrderPage";
import RoutePageNav from "../RoutePageNav/RoutePageNav";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      <div className="cart-container">
        <RoutePageNav />
        <div className="main-cart">
          <span onClick={() => navigate("/")}>Home</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>Cart</span>

          <div className="cart-box">
            <div className="box1 box">
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
            <OrderPage
              child="Go to Checkout"
              subTotal={592}
              deliveryFee={15}
              total={607}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;

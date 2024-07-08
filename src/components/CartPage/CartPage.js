import "./CartPage.css";
import faShoppingCart from "../../assets/faShoppingCart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import faTag from "../../assets/faTag.svg";
import Footer from "../Footer/Footer";
import CartCard from "../CartCard/CartCard";
import Button from "../Button/Button";

function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <nav className="cart-nav">
          <h2>SOUNDR</h2>
          <p>
            <img src={faShoppingCart} alt="ShoppingCart" />
          </p>
        </nav>
        <div className="main-cart">
          <span>Home</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>Cart</span>

          <div className="cart-box">
            <div className="box1 box">
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
            <div className="box2 box">
              <h3>Order Summary</h3>
              <div className="price-list">
                <div className="sub-total summary">
                  <p>Subtotal</p>
                  <p className="cost">$592</p>
                </div>
                <div className="discount summary">
                  <p>Discount (0%)</p>
                  <p className="cost">-</p>
                </div>
                <div className="delivery summary">
                  <p>Delivery Fee</p>
                  <p className="cost">$15</p>
                </div>
                <div className="total summary">
                  <p>Total</p>
                  <p className="total-price">$607</p>
                </div>
              </div>

              <div className="input-btn">
                <div className="promo">
                  <img src={faTag} alt="Tag" />
                  <input type="text" placeholder="Add promo code" />
                </div>
                <Button className={"apply"}>Apply</Button>
              </div>
              <Button className={"checkout"}>
                Go to Checkout
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;

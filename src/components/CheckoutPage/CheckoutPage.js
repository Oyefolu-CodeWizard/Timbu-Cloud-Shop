import "./CheckoutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import faShoppingCart from "../../assets/faShoppingCart.svg";
import RoutePageNav from "../RoutePageNav/RoutePageNav";
import Footer from "../Footer/Footer";
import OrderPage from "../OrderPage/OrderPage";
import Button from "../Button/Button";

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <RoutePageNav faShoppingCart={faShoppingCart} />
        <div className="main-checkout">
          <span>Home</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>Cart</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>Shipping</span>

          <div className="checkout-box">
            <div className="box1 box expand-box">
              <h2>Shipping Details</h2>
              <form className="formic">
                <div className="address">
                  <p>Use saved address</p>
                  <select name="" id="" disabled>
                    <option value="123, Lagos Ikeja">123, Lagos Ikeja</option>
                  </select>
                </div>

                <p>First line of address</p>
                <input type="text" placeholder="123" />
                <p>Street name</p>
                <input type="text" placeholder="Medical Road" />

                <div className="postcode">
                  <div>
                    <p>Postcode</p>
                    <input type="text" placeholder="ABC - 123" />
                  </div>
                  <div>
                    <p>Select Shipping</p>
                    <select name="" id="">
                      <option value="Select Shipping">Select Shipping</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="btns">
                <p>Cancel order</p>
                <Button className={"done"}>Done</Button>
              </div>
            </div>
            <OrderPage
              child="Proceed to payment"
              subTotal={760}
              deliveryFee={15}
              total={775}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;

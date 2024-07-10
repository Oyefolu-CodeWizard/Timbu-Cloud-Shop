import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import RoutePageNav from "../RoutePageNav/RoutePageNav";
import Footer from "../Footer/Footer";
import OrderPage from "../OrderPage/OrderPage";
import Button from "../Button/Button";

const PaymentPage = () => {
  const navigate = useNavigate();
  return (
    <div className="payment-page">
      <div className="payment-container">
        <RoutePageNav />
        <div className="main-payment">
          <span onClick={() => navigate("/")}>Home</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span onClick={() => navigate("/cart")}>Cart</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span onClick={() => navigate("/checkout")}>Shipping</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>Payment</span>

          <div className="payment-box">
            <div className="box1 box expand-box">
              <h2>Payment Details</h2>
              <form className="formic">
                <div className="saved-card">
                  <p>Use saved card</p>
                  <select name="" id="" disabled>
                    <option value="123, Lagos Ikeja">
                      Mastercard ending 725
                    </option>
                  </select>
                </div>

                <p>Name on card</p>
                <div className="input">
                  <input type="text" placeholder="Code Wizard" />
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>

                <p>Card Number</p>
                <div className="input">
                  <input type="text" placeholder="123 - 456 -" />
                </div>

                <div className="expiration">
                  <div>
                    <p>Expiration</p>
                    <div className="expired-date">
                      <input type="text" placeholder="03" />
                      <input type="text" placeholder="01" className="end" />
                    </div>
                  </div>
                  <div>
                    <p>CVC</p>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
              </form>
              <div className="btns">
                <p>Cancel order</p>
                <Button className={"complete-order"} text={"Complete order"}>
                  Complete order
                </Button>
              </div>
            </div>
            <OrderPage
              child="Payment"
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
};

export default PaymentPage;

import "./PaymentSuccess.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RoutePageNav from "../RoutePageNav/RoutePageNav";
import Footer from "../Footer/Footer";
import PaymentCheck from "../../assets/PaymentCheck.svg";
import Button from "../Button/Button";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="successful-page">
      <div className="successful-container">
        <RoutePageNav />
        <div className="main-successful">
          <span onClick={() => navigate("/")}>Home</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span onClick={() => navigate("/cart")}>Cart</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span onClick={() => navigate("/checkout")}>Shipping</span>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>Payment</span>

          <div className="successful-box">
            <div className="check-box">
              <div className="green-check">
                <img src={PaymentCheck} alt="PaymentCheck" />
                <p>Payment Successful</p>
                <Button
                  className={"payment-done"}
                  onClick={() => navigate("/")}
                >
                  Done
                </Button>
              </div>
            </div>
            <p>
              Your order has been placed and on the way to you.
              <a href="#">Continue Shopping</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentSuccess;

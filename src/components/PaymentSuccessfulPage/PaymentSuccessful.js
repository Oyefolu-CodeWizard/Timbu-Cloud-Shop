import "./PaymentSuccessful.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RoutePageNav from "../RoutePageNav/RoutePageNav";
import Footer from "../Footer/Footer";

const PaymentSuccessful = () => {
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

          <div className="successful-box"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentSuccessful;

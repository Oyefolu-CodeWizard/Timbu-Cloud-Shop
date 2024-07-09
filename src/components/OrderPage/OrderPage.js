import "./OrderPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import faTag from "../../assets/faTag.svg";
import Button from "../Button/Button";

function OrderPage({ child, subTotal, deliveryFee, total }) {
  return (
    <>
      <div className="box2 box">
        <h3>Order Summary</h3>
        <div className="price-list">
          <div className="sub-total summary">
            <p>Subtotal</p>
            <p className="cost">${subTotal}</p>
          </div>
          <div className="discount summary">
            <p>Discount (0%)</p>
            <p className="cost">-</p>
          </div>
          <div className="delivery summary">
            <p>Delivery Fee</p>
            <p className="cost">${deliveryFee}</p>
          </div>
          <div className="total summary">
            <p>Total</p>
            <p className="total-price">${total}</p>
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
          {child}
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </>
  );
}

export default OrderPage;

import "./CartCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

function CartCard() {
  return (
    <div className="cart-card">
      <div className="rec-card">
        <img src="../../assets/SonyGrey.svg" alt="SonyGrey" />
        <div className="label-add">
          <div className="label">
            <h3>Sony Grey</h3>
            <p>Color: White</p>
            <p className="price">$180</p>
          </div>
          <div className="add-del">
            <FontAwesomeIcon icon={faTrashAlt} />
            <Button className={"add"}>
              <span className="minus">-</span> {1}
              <span className="plus">+</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import faShoppingCart from "../../assets/faShoppingCart.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <nav>
      <div className="navBar">
        <h2>SOUNDR</h2>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder="Search for products..."
          />
        </div>
        <p className="cart">
          {/* <FontAwesomeIcon icon={faSearch} size="xl" /> */}
          <img
            src={faShoppingCart}
            alt="ShoppingCart"
            onClick={() => navigate("/cart")}
          />
        </p>
      </div>
    </nav>
  );
}

export default NavBar;

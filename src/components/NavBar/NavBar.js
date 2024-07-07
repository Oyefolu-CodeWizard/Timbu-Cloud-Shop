import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import faShoppingCart from "../../assets/faShoppingCart.svg";

function NavBar() {
  return (
    <nav>
      <div className="navBar">
        <h2>SOUNDR</h2>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search for products..." />
        </div>
        <p>
          <img src={faShoppingCart} alt="" />
        </p>
      </div>
    </nav>
  );
}

export default NavBar;

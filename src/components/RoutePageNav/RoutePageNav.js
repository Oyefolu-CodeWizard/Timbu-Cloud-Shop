import "./RoutePageNav.css";

function RoutePageNav({ faShoppingCart }) {
  return (
    <nav className="cart-nav">
      <h2>SOUNDR</h2>
      <p>
        <img src={faShoppingCart} alt="ShoppingCart" />
      </p>
    </nav>
  );
}

export default RoutePageNav;

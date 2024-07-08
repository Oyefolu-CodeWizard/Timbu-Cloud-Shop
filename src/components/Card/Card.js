import "./Card.css";
import Star from "../Star/Star";
import Button from "../Button/Button";

function Card({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Star />
      <p>{price}</p>
      <Button className={"add-to-cart"}>Add to cart</Button>
    </div>
  );
}

export default Card;

import "./ShopProduct.css";
import Card from "../Card/Card";

const products = [
  {
    image: "../../assets/BeatsGold.svg",
    name: "Beats Gold",
    price: "$212",
  },
  {
    image: "../../assets/BeatsByDre2.svg",
    name: "Beats By Dre ",
    price: "$205",
  },
  {
    image: "../../assets/SonyRaven.svg",
    name: "Sony Raven",
    price: "$120",
  },
  {
    image: "../../assets/SonyGrey.svg",
    name: "Sony Grey",
    price: "$180",
  },
  {
    image: "../../assets/BoseNeutral.svg",
    name: "Bose Neutral",
    price: "$175",
  },
  {
    image: "../../assets/BeatsProGreen.svg",
    name: "Beats Pro Green",
    price: "$150",
  },
  {
    image: "../../assets/BosePlatinum.svg",
    name: "Bose Platinum ",
    price: "$211",
  },
  {
    image: "../../assets/BeatsPro.svg",
    name: "Beats Pro",
    price: "$200",
  },
  {
    image: "../../assets/SonyGreyPro.svg",
    name: "Sony Grey Pro",
    price: "$195",
  },
  {
    image: "../../assets/BeatsMonsterPro.svg",
    name: "Beats Monster Pro",
    price: "$320",
  },
  {
    image: "../../assets/SonyLimaCombo.svg",
    name: "Sony Lima Combo",
    price: "$225",
  },
  {
    image: "../../assets/BeatByDre.svg",
    name: "Beats By Dre",
    price: "$400",
  },
];

function ShopProduct() {
  return (
    <div className="shop-product">
      <div className="line"></div>

      <div className="product-card">
        <h1>Shop Products</h1>

        <div className="card-container">
          {products.map((el) => (
            <Card
              image={el.image}
              name={el.name}
              price={el.price}
              key={el.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;

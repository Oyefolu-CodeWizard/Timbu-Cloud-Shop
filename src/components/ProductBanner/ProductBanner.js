import "./ProductBanner.css";
import Headset from "../../assets/Headphone.svg";

function ProductBanner() {
  return (
    <>
      <div className="product-banner">
        <div className="product-intro">
          <div className="product-txt">
            <h1>FEEL THE MUSIC, DON’T JUST HEAR IT.</h1>
            <p>
              Browse through our diverse range of meticulously crafted headsets,
              designed to bring out your individuality and give you the best
              sound experience.
            </p>
            <button>Shop Now</button>
          </div>

          <div className="product-rating">
            <div className="rate">
              200+
              <p className="txt">International Brands</p>
            </div>
            <div className="rate">
              2,000+
              <p className="txt">High-Quality Products</p>
            </div>
            <div className="rate">
              30,000+
              <p className="txt">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-banner">
        <div className="mobile-intro">
          <div className="mobile-txt">
            <h1>FEEL THE MUSIC, DON’T JUST HEAR IT.</h1>
            <p>
              Browse through our diverse range of meticulously crafted headsets,
              designed to bring out your individuality and give you the best
              sound experience.
            </p>
            <button>Shop Now</button>
          </div>

          <div className="mobile-rating">
            <div className="sep-rate">
              <div className="mobile-rate">
                200+
                <p className="M-txt">International Brands</p>
              </div>
              <div className="mobile-rate">
                2,000+
                <p className="M-txt">High-Quality Products</p>
              </div>
            </div>
            <div className="last">
              <div className="mobile-rate">
                30,000+
                <p className="M-txt">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="headset">
          <img src={Headset} alt="Headset" />
        </div>
      </div>
    </>
  );
}

export default ProductBanner;

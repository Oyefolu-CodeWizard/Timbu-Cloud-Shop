import "./ProductBanner.css";

function ProductBanner() {
  return (
    <div className="product-banner">
      <div className="product-intro">
        <div className="product-txt">
          <h1>FEEL THE MUSIC, DON’T JUST HEAR IT.</h1>
          <p>
            Browse through our diverse range of meticulously crafted headsets,
            designed to bring out your individuality and give you the best sound
            experience.
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
  );
}

export default ProductBanner;

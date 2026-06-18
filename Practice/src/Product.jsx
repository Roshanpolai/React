import "./Product.css";

function Product({ name, description, price, discountPrice }) {
  return (
    <div className="product">
      
      <div className="product-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="price-container">
        <span className="old-price">₹{price}</span>
        <span className="new-price">₹{discountPrice}</span>
      </div>
    </div>
  );
}

export default Product;
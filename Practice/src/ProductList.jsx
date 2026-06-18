import Product from "./Product.jsx";
import "./productList.css";

function ProductList() {
  const products = [
    {
      name: "Laptop",
      description: "Powerful laptop",
      price: 60000,
      discountPrice: 80000,
    },
    {
      name: "Phone",
      description: "Latest smartphone",
      price: 25000,
      discountPrice: 50000,
    },
    {
      name: "Headphones",
      description: "Wireless headphones",
      price: 3000,
      discountPrice: 40000,
    },
  ];

  return (
    <div>
      <h1 className="heading">
        Blockbuster Deals on Computer Accessories | Shop Now
      </h1>

      <div className="product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            discountPrice={product.discountPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

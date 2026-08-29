import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <h1>Product not found</h1>
      </main>
    );
  }


  return (
    <main className="product-details-page">

      <div className="product-details-container">

        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        <div className="product-details-info">

          <p className="product-category">
            {product.category}
          </p>


          <h1>
            {product.name}
          </h1>


          <div className="product-details-rating">

            ⭐ {product.rating}

            <span>
              ({product.reviews} reviews)
            </span>

          </div>


          <h2 className="product-details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </h2>


          <p className="product-description">
            {product.description}
          </p>


          <button className="details-cart-button">
            Add to Cart
          </button>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;
function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="rating">
          ⭐ {product.rating}
          <span> ({product.reviews})</span>
        </p>

        <p className="price">
          ₹{product.price}
        </p>

        <div className="product-actions">
          <button className="details-button">
            View Details
          </button>

          <button className="cart-button">
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;
import { Link } from "react-router-dom";
function ProductCard({ product, cart, setCart }) {

  function addToCart() {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

    console.log("Cart:", cart);
  }


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

        <h3>
          {product.name}
        </h3>

        <p className="rating">
          ⭐ {product.rating}
          <span> ({product.reviews})</span>
        </p>

        <p className="price">
          ₹{product.price}
        </p>

        <div className="product-actions">

          <Link
  to={`/product/${product.id}`}
  className="details-button"
>
  View Details
</Link>

          <button
            className="cart-button"
            onClick={addToCart}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
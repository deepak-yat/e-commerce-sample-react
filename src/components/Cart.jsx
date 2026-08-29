import { Link } from "react-router-dom";
function Cart({ cart, setCart }) {

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }


  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }


  function removeFromCart(id) {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  }


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  return (
    <main className="cart-page">

      <h1 className="section-title">
        My Cart
      </h1>


      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>
            Your cart is empty
          </h2>

          <p>
            Add some products to get started.
          </p>

        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="cart-item-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>


                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>


                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>


          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <p>
              Items:{" "}
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </p>

            <h3>
              Total: ₹{total.toLocaleString("en-IN")}
            </h3>

            <Link
    to="/checkout"
    className="checkout-button"
  >
    Proceed to Checkout
  </Link>

          </div>

        </div>

      )}

    </main>
  );
}

export default Cart;
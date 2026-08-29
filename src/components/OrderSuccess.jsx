import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {

  const location = useLocation();

  const {
    cart = [],
    address = {},
    paymentMethod = "",
    total = 0
  } = location.state || {};


  function getPaymentName() {

    if (paymentMethod === "upi") {
      return "UPI";
    }

    if (paymentMethod === "card") {
      return "Credit / Debit Card";
    }

    if (paymentMethod === "netbanking") {
      return "Net Banking";
    }

    if (paymentMethod === "cod") {
      return "Cash on Delivery";
    }

    return "Not selected";
  }


  return (
    <main className="order-success-page">

      <div className="success-icon">
        ✓
      </div>


      <h1>
        Order Placed Successfully!
      </h1>

      <p className="success-message">
        Thank you for shopping with ShopZone.
        Your order has been placed successfully.
      </p>


      {/* ORDER DETAILS */}

      <section className="order-details">

        <h2>
          Order Details
        </h2>


        {/* PRODUCTS */}

        <div className="order-products">

          {cart.map((item) => (

            <div
              className="order-product"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />


              <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price.toLocaleString("en-IN")}
                  {" "}× {item.quantity}
                </p>

                <p>
                  Subtotal: ₹
                  {(item.price * item.quantity)
                    .toLocaleString("en-IN")}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* TOTAL */}

        <div className="order-total">

          <span>
            Total
          </span>

          <strong>
            ₹{total.toLocaleString("en-IN")}
          </strong>

        </div>


        {/* ADDRESS + PAYMENT */}

        <div className="order-info">


          {/* ADDRESS */}

          <div>

            <h3>
              Delivery Address
            </h3>

            <p>
              {address.name}
            </p>

            <p>
              {address.phone}
            </p>

            <p>
              {address.address}
            </p>

            <p>
              {address.city} - {address.pincode}
            </p>

          </div>


          {/* PAYMENT */}

          <div>

            <h3>
              Payment Method
            </h3>

            <p>
              {getPaymentName()}
            </p>

            <p className="payment-success">
              ✓ Payment Confirmed
            </p>

          </div>


        </div>

      </section>


      <Link
        to="/"
        className="continue-shopping-button"
      >
        Continue Shopping
      </Link>

    </main>
  );
}

export default OrderSuccess;
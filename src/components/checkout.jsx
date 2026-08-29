import { useState } from "react";

function Checkout({ cart }) {

  const [paymentMethod, setPaymentMethod] = useState("");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  function handleAddressChange(event) {

    const { name, value } = event.target;

    setAddress({
      ...address,
      [name]: value
    });

  }


  function handlePlaceOrder(event) {

    event.preventDefault();

    console.log("Address:", address);
    console.log("Payment:", paymentMethod);
    console.log("Cart:", cart);

  }


  return (
    <main className="checkout-page">

      <h1 className="checkout-title">
        Checkout
      </h1>


      <form onSubmit={handlePlaceOrder}>

        {/* DELIVERY ADDRESS */}

        <section className="checkout-section">

          <h2>
            Delivery Address
          </h2>


          <div className="address-grid">

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleAddressChange}
                placeholder="Enter your name"
              />

            </div>


            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={address.phone}
                onChange={handleAddressChange}
                placeholder="Enter phone number"
              />

            </div>


            <div className="form-group full-width">

              <label>
                Address
              </label>

              <textarea
                name="address"
                value={address.address}
                onChange={handleAddressChange}
                placeholder="House no., street, area"
              />

            </div>


            <div className="form-group">

              <label>
                City
              </label>

              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                placeholder="City"
              />

            </div>


            <div className="form-group">

              <label>
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={address.pincode}
                onChange={handleAddressChange}
                placeholder="Pincode"
              />

            </div>

          </div>

        </section>


        {/* PAYMENT */}

        <section className="checkout-section">

          <h2>
            Payment Method
          </h2>


          {/* UPI */}

          <div className="payment-option">

            <button
              type="button"
              className="payment-header"
              onClick={() =>
                setPaymentMethod(
                  paymentMethod === "upi"
                    ? ""
                    : "upi"
                )
              }
            >

              <span>
                <input
                  type="radio"
                  checked={paymentMethod === "upi"}
                  onChange={() =>
                    setPaymentMethod("upi")
                  }
                />

                UPI
              </span>

              <span>
                {paymentMethod === "upi"
                  ? "⌃"
                  : "⌄"}
              </span>

            </button>


            {paymentMethod === "upi" && (

              <div className="payment-body">

                <label>
                  UPI ID
                </label>

                <input
                  type="text"
                  placeholder="example@upi"
                />

              </div>

            )}

          </div>


          {/* CARD */}

          <div className="payment-option">

            <button
              type="button"
              className="payment-header"
              onClick={() =>
                setPaymentMethod(
                  paymentMethod === "card"
                    ? ""
                    : "card"
                )
              }
            >

              <span>

                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() =>
                    setPaymentMethod("card")
                  }
                />

                Credit / Debit Card

              </span>

              <span>
                {paymentMethod === "card"
                  ? "⌃"
                  : "⌄"}
              </span>

            </button>


            {paymentMethod === "card" && (

              <div className="payment-body">

                <div className="form-group">

                  <label>
                    Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                  />

                </div>


                <div className="card-row">

                  <div className="form-group">

                    <label>
                      Expiry Date
                    </label>

                    <input
                      type="text"
                      placeholder="MM/YY"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      CVV
                    </label>

                    <input
                      type="password"
                      placeholder="***"
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Name on Card
                  </label>

                  <input
                    type="text"
                    placeholder="Name on card"
                  />

                </div>

              </div>

            )}

          </div>


          {/* NET BANKING */}

          <div className="payment-option">

            <button
              type="button"
              className="payment-header"
              onClick={() =>
                setPaymentMethod(
                  paymentMethod === "netbanking"
                    ? ""
                    : "netbanking"
                )
              }
            >

              <span>

                <input
                  type="radio"
                  checked={
                    paymentMethod === "netbanking"
                  }
                  onChange={() =>
                    setPaymentMethod("netbanking")
                  }
                />

                Net Banking

              </span>

              <span>
                {paymentMethod === "netbanking"
                  ? "⌃"
                  : "⌄"}
              </span>

            </button>


            {paymentMethod === "netbanking" && (

              <div className="payment-body">

                <label>
                  Select Bank
                </label>

                <select>

                  <option>
                    Select your bank
                  </option>

                  <option>
                    SBI
                  </option>

                  <option>
                    HDFC Bank
                  </option>

                  <option>
                    ICICI Bank
                  </option>

                  <option>
                    Axis Bank
                  </option>

                </select>

              </div>

            )}

          </div>


          {/* CASH */}

          <div className="payment-option">

            <button
              type="button"
              className="payment-header"
              onClick={() =>
                setPaymentMethod(
                  paymentMethod === "cod"
                    ? ""
                    : "cod"
                )
              }
            >

              <span>

                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() =>
                    setPaymentMethod("cod")
                  }
                />

                Cash on Delivery

              </span>

              <span>
                {paymentMethod === "cod"
                  ? "⌃"
                  : "⌄"}
              </span>

            </button>


            {paymentMethod === "cod" && (

              <div className="payment-body">

                <p>
                  Pay when your order is delivered.
                </p>

              </div>

            )}

          </div>

        </section>


        {/* ORDER SUMMARY */}

        <section className="checkout-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Items
            </span>

            <span>
              {cart.reduce(
                (sum, item) =>
                  sum + item.quantity,
                0
              )}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span>
              FREE
            </span>

          </div>


          <div className="summary-total">

            <span>
              Total
            </span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>

          </div>


          <button
            type="submit"
            className="place-order-button"
          >
            Place Order
          </button>

        </section>

      </form>

    </main>
  );
}

export default Checkout;
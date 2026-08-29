import { Link } from "react-router-dom";

function Navbar({ cart }) {

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/">
          Products
        </Link>

        <Link to="/">
          Categories
        </Link>

      </div>


      <div className="search-container">

        <span className="search-icon">
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search products..."
        />

      </div>


      <div className="nav-actions">

        <Link
          to="/"
          className="nav-action"
        >
          <span>👤</span>
          <span>Profile</span>
        </Link>


        <Link
          to="/login"
          className="nav-action"
        >
          <span>Login</span>
        </Link>


        <Link
          to="/cart"
          className="cart-link"
        >
          <span>🛒</span>

          <span>Cart</span>

          <span className="cart-count">
            {cartCount}
          </span>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
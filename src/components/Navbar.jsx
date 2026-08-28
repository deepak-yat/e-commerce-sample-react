import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Categories</a>
      </div>

      <div className="search-container">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <div className="nav-actions">

        <a href="/" className="nav-action">
          <span>👤</span>
          <span>Profile</span>
        </a>

        <a href="/login" className="nav-action">
          <span>Login</span>
        </a>

        <a href="/" className="cart-link">
          <span>🛒</span>
          <span>Cart</span>
          <span className="cart-count">0</span>
        </a>

      </div>

    </nav>
  );
}

export default Navbar;
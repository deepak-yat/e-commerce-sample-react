import Navbar from "./Navbar";

function Header({ cart }) {
  return (
    <header className="header">

      <div className="header-container">

        <div className="logo">
          <span className="logo-icon">🛒</span>
          <span>ShopZone</span>
        </div>

        <Navbar cart={cart} />

      </div>

    </header>
  );
}

export default Header;
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <span className="logo-icon">🛒</span>
          <span>ShopZone</span>
        </div>

        <Navbar />

      </div>
    </header>
  );
}

export default Header;
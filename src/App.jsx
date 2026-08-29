import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout";
import Header from "./components/Header";
import ProductList from "./components/productList";
import Auth from "./components/Auth";
import Cart from "./components/Cart";


function Home({ cart, setCart }) {
  return (
    <main className="main-content">

      <section className="hero">

        <h1 className="hero-title">
          Welcome to ShopZone
        </h1>

        <p className="hero-subtitle">
          Find the products you love.
        </p>

      </section>

      <section className="products-section">

        <h2 className="section-title">
          Featured Products
        </h2>

        <ProductList
          cart={cart}
          setCart={setCart}
        />

      </section>

    </main>
  );
}


function App() {

  // Our shared cart state
  const [cart, setCart] = useState([]);

  return (
    <div>

      <Header cart={cart} />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/login"
          element={<Auth />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout cart={cart} />
          }
        />  
        
      </Routes>

    </div>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/productList";
import Auth from "./components/Auth";


function Home() {
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

        <ProductList />

      </section>

    </main>
  );
}


function App() {
  return (
    <div>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Auth />}
        />

      </Routes>

    </div>
  );
}


export default App;
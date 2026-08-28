import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 25;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div className="pagination">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default ProductList;
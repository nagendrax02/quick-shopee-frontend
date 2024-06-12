import React from "react";
import "./ProductsSection.css"

interface Product {
  id: number;
  name: string;
  image: string;
}

interface Products {
  products: Product[];
}

function ProductsSection({ products }: Products): JSX.Element {
  return (
    <div className="products-section">
      {products.map((product: Product) => {
        return (
          <div className="product-section">
            <img src={product.image} alt={product.name} />
            <span>{product.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsSection;

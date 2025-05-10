import axios from "axios";
import { use, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {ProductsGrid} from './ProductsGrid' 

import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}
